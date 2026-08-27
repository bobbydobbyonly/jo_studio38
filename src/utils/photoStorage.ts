// Safe storage helper with IndexedDB + LocalStorage support

const DB_NAME = 'jo_studio38_profile_db';
const STORE_NAME = 'profile_data';
const KEY = 'custom_photo';
export const LOCAL_STORAGE_KEY = 'jo_custom_profile_image';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function setStoredPhoto(dataUrl: string): Promise<void> {
  // 1. Always attempt localStorage for synchronous initial loads
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, dataUrl);
    console.log('[photoStorage] Successfully saved photo to localStorage (key:', LOCAL_STORAGE_KEY, ', length:', dataUrl.length, ')');
  } catch (lsErr) {
    console.warn('[photoStorage] localStorage.setItem failed (likely quota/iframe restriction):', lsErr);
  }

  // 2. Always save to IndexedDB as high-capacity durable store
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
    console.log('[photoStorage] Successfully saved photo to IndexedDB');
  } catch (idbErr) {
    console.warn('[photoStorage] IndexedDB save failed:', idbErr);
  }
}

export async function getStoredPhoto(): Promise<string | null> {
  // Try localStorage first (fast)
  try {
    const lsPhoto = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (lsPhoto) {
      console.log('[photoStorage] Found photo in localStorage (length:', lsPhoto.length, ')');
      return lsPhoto;
    }
  } catch (err) {
    console.warn('[photoStorage] Error reading localStorage:', err);
  }

  // Try IndexedDB if localStorage was empty or failed
  try {
    const db = await openDB();
    return await new Promise<string | null>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(KEY);
      req.onsuccess = () => {
        const val = req.result as string | undefined;
        if (val) {
          console.log('[photoStorage] Retrieved photo from IndexedDB (length:', val.length, ')');
          // Re-sync back to localStorage if possible
          try {
            localStorage.setItem(LOCAL_STORAGE_KEY, val);
          } catch {
            // Ignore quota
          }
          resolve(val);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch (idbErr) {
    console.warn('[photoStorage] IndexedDB read failed:', idbErr);
    return null;
  }
}

export async function removeStoredPhoto(): Promise<void> {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    console.log('[photoStorage] Removed photo from localStorage');
  } catch (err) {
    console.warn('[photoStorage] Error removing from localStorage:', err);
  }

  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
    console.log('[photoStorage] Removed photo from IndexedDB');
  } catch (idbErr) {
    console.warn('[photoStorage] IndexedDB delete failed:', idbErr);
  }
}
