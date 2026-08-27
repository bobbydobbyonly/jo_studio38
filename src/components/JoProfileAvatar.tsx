import React, { useState, useEffect } from 'react';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface JoProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  alt?: string;
  usePhoto?: boolean;
}

export const JoProfileAvatar: React.FC<JoProfileAvatarProps> = ({
  className = '',
  size = 'md',
  alt = 'jo_studio38 profile',
  usePhoto = true,
}) => {
  const { photoUrl } = useProfilePhoto();
  const [imgError, setImgError] = useState(false);

  // Reset imgError whenever photoUrl changes
  useEffect(() => {
    setImgError(false);
  }, [photoUrl]);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-32 h-32',
    custom: '',
  };

  // If user has uploaded a custom profile photo and no loading error occurred
  if (usePhoto && !imgError && photoUrl) {
    return (
      <div className={`relative overflow-hidden bg-white ${sizeClasses[size]} ${className}`}>
        <img
          src={photoUrl}
          alt={alt}
          onLoad={() => {
            console.log('[JoProfileAvatar] Image loaded successfully (size:', size, ')');
          }}
          onError={(e) => {
            console.error('[JoProfileAvatar] Image failed to render. Error:', e, 'photoUrl prefix:', photoUrl.slice(0, 50));
            setImgError(true);
          }}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Clean, neutral default avatar placeholder when user has not uploaded a photo (or if imgError occurred)
  return (
    <div
      className={`relative overflow-hidden bg-[#eef0f4] text-[#9ca3af] flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}
      title={alt}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3/5 h-3/5 text-[#9ca3af]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 4a4 4 0 100 8 4 4 0 000-8zm-2 9a6 6 0 00-6 6v1a1 1 0 001 1h14a1 1 0 001-1v-1a6 6 0 00-6-6h-4z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
