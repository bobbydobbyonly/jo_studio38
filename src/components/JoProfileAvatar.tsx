import React from 'react';
import fixedJoProfile from '../assets/images/jo_profile.jpg';

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
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-32 h-32',
    custom: '',
  };

  return (
    <div className={`relative overflow-hidden bg-white ${sizeClasses[size]} ${className}`}>
      <img
        src={fixedJoProfile}
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain p-0.5"
      />
    </div>
  );
};
