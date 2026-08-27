import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getStoredPhoto, setStoredPhoto, removeStoredPhoto, LOCAL_STORAGE_KEY } from '../utils/photoStorage';

interface ProfilePhotoContextType {
  photoUrl: string | null;
  savePhoto: (dataUrl: string) => Promise<void>;
  resetPhoto: () => Promise<void>;
  hasPhoto: boolean;
}

const ProfilePhotoContext = createContext<ProfilePhotoContextType>({
  photoUrl: null,
  savePhoto: async () => {},
  resetPhoto: async () => {},
  hasPhoto: false,
});

export const ProfilePhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Initial synchronous state from localStorage
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    try {
      const initial = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (initial) {
        console.log('[ProfilePhotoContext] Initial state from localStorage, length:', initial.length);
      }
      return initial;
    } catch (e) {
      console.warn('[ProfilePhotoContext] Could not read localStorage synchronously on boot:', e);
      return null;
    }
  });

  // 2. Asynchronous hydration check from IndexedDB/LocalStorage
  useEffect(() => {
    let isMounted = true;
    console.log('[ProfilePhotoContext] Provider mounted, hydrating storage...');

    getStoredPhoto().then((stored) => {
      if (isMounted && stored) {
        console.log('[ProfilePhotoContext] Hydrated photo from storage, length:', stored.length);
        setPhotoUrl(stored);
      }
    });

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LOCAL_STORAGE_KEY) {
        console.log('[ProfilePhotoContext] storage event received for key:', e.key);
        setPhotoUrl(e.newValue);
      }
    };

    const handleCustomEvent = () => {
      console.log('[ProfilePhotoContext] jo_profile_updated event received, re-checking storage');
      getStoredPhoto().then((stored) => {
        if (isMounted) {
          setPhotoUrl(stored);
        }
      });
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('jo_profile_updated', handleCustomEvent);

    return () => {
      isMounted = false;
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('jo_profile_updated', handleCustomEvent);
    };
  }, []);

  // 3. Save photo action
  const savePhoto = useCallback(async (dataUrl: string) => {
    console.log('[ProfilePhotoContext] savePhoto called, length:', dataUrl.length);
    // Instant state update in memory so the UI reflects it immediately
    setPhotoUrl(dataUrl);

    // Persist to durable storage
    await setStoredPhoto(dataUrl);

    // Dispatch broadcast event for any listener components
    window.dispatchEvent(new Event('jo_profile_updated'));
    console.log('[ProfilePhotoContext] savePhoto complete and broadcasted');
  }, []);

  // 4. Reset photo action
  const resetPhoto = useCallback(async () => {
    console.log('[ProfilePhotoContext] resetPhoto called');
    setPhotoUrl(null);
    await removeStoredPhoto();
    window.dispatchEvent(new Event('jo_profile_updated'));
    console.log('[ProfilePhotoContext] resetPhoto complete');
  }, []);

  return (
    <ProfilePhotoContext.Provider
      value={{
        photoUrl,
        savePhoto,
        resetPhoto,
        hasPhoto: Boolean(photoUrl),
      }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(ProfilePhotoContext);
