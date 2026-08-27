import React from 'react';
import joProfileSvg from '../assets/images/jo_profile.svg';

interface JoProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  alt?: string;
}

export const JoProfileAvatar: React.FC<JoProfileAvatarProps> = ({
  className = '',
  size = 'md',
  alt = 'jo_studio38 profile',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-32 h-32',
    custom: '',
  };

  return (
    <div className={`relative overflow-hidden bg-white flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <img
        src={joProfileSvg}
        alt={alt}
        className="w-full h-full object-contain select-none pointer-events-none"
        loading="eager"
      />
    </div>
  );
};
