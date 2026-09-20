import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Check, Sparkles, X, User } from 'lucide-react';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  editable?: boolean;
  className?: string;
  showStatus?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  size = 'lg',
  editable = true,
  className = '',
  showStatus = true,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage or try default file paths
  useEffect(() => {
    const saved = localStorage.getItem('py_profile_photo');
    if (saved) {
      setPhotoUrl(saved);
    } else {
      // Check if photo for cv.jpeg is present in public directory
      setPhotoUrl('/photo for cv.jpeg');
    }

    const handleSync = () => {
      const updated = localStorage.getItem('py_profile_photo');
      if (updated) {
        setPhotoUrl(updated);
        setImageError(false);
      }
    };

    window.addEventListener('profile_photo_updated', handleSync);
    return () => window.removeEventListener('profile_photo_updated', handleSync);
  }, []);

  const handleFile = (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please upload an image file (e.g. photo for cv.jpeg, PNG, or WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        setImageError(false);
        localStorage.setItem('py_profile_photo', result);
        window.dispatchEvent(new Event('profile_photo_updated'));
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  // Dimensions based on size
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl',
    md: 'w-14 h-14 rounded-2xl',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl',
    xl: 'w-32 h-32 sm:w-36 sm:h-36 rounded-3xl',
  };

  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Avatar Container */}
      <div
        onDragOver={(e) => {
          if (!editable) return;
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => editable && fileInputRef.current?.click()}
        className={`relative ${sizeClasses[size]} overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border-4 border-white dark:border-slate-900 shadow-xl transition-all duration-300 ${
          editable ? 'cursor-pointer group' : ''
        } ${isDragging ? 'ring-4 ring-indigo-500 scale-105' : ''}`}
        title={editable ? 'Click or drag "photo for cv.jpeg" to update profile picture' : 'Priyanshu Yadav'}
      >
        {photoUrl && !imageError ? (
          <img
            src={photoUrl}
            alt="Priyanshu Yadav - Product Manager"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => {
              // If the file path /photo for cv.jpeg isn't loaded yet, fall back to vector likeness
              setImageError(true);
            }}
          />
        ) : (
          /* High-Fidelity Stylized Likeness of Priyanshu (Navy suit, sunglasses, floral tie, smile) */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-800 dark:text-white p-2 text-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
              {/* Soft background */}
              <rect width="100" height="100" fill="#f8fafc" />
              
              {/* Navy Suit Jacket */}
              <path d="M 20 100 L 32 68 L 50 78 L 68 68 L 80 100 Z" fill="#1e293b" />
              {/* Suit lapels */}
              <path d="M 32 68 L 42 78 L 30 100 Z" fill="#0f172a" />
              <path d="M 68 68 L 58 78 L 70 100 Z" fill="#0f172a" />
              
              {/* White Shirt */}
              <polygon points="40,68 60,68 50,88" fill="#ffffff" />
              {/* Collar */}
              <polygon points="36,68 44,76 48,68" fill="#e2e8f0" />
              <polygon points="64,68 56,76 52,68" fill="#e2e8f0" />
              
              {/* Navy Tie with Gold Accents */}
              <polygon points="48,72 52,72 54,96 50,100 46,96" fill="#1e3a8a" />
              <circle cx="50" cy="80" r="1.2" fill="#f59e0b" />
              <circle cx="50" cy="88" r="1.2" fill="#f59e0b" />
              <circle cx="50" cy="95" r="1" fill="#f59e0b" />

              {/* Neck */}
              <rect x="44" y="58" width="12" height="14" rx="2" fill="#e0a98b" />

              {/* Head & Face */}
              <ellipse cx="50" cy="46" rx="19" ry="22" fill="#f3be9e" />

              {/* Wavy Black Hair */}
              <path
                d="M 27 42 C 27 24, 40 18, 50 18 C 60 18, 73 24, 73 42 C 73 34, 69 22, 50 22 C 31 22, 27 34, 27 42 Z"
                fill="#18181b"
              />
              <path d="M 28 35 Q 40 16 60 22 Q 74 26 73 38 Q 66 22 48 24 Z" fill="#27272a" />

              {/* Ears */}
              <ellipse cx="30" cy="48" rx="3" ry="5" fill="#e0a98b" />
              <ellipse cx="70" cy="48" rx="3" ry="5" fill="#e0a98b" />

              {/* Beard & Mustache */}
              <path
                d="M 38 56 Q 50 59 62 56 Q 60 67 50 67 Q 40 67 38 56 Z"
                fill="#27272a"
                opacity="0.9"
              />
              {/* Mustache */}
              <path d="M 42 55 Q 50 58 58 55 Q 50 56 42 55 Z" fill="#18181b" />

              {/* Wide Friendly Smile */}
              <path d="M 43 56 Q 50 64 57 56 Z" fill="#ffffff" stroke="#991b1b" strokeWidth="0.5" />

              {/* Sunglasses (Aviator Tinted) */}
              <rect x="34" y="38" width="13" height="10" rx="3" fill="#3b0764" opacity="0.85" stroke="#94a3b8" strokeWidth="1" />
              <rect x="53" y="38" width="13" height="10" rx="3" fill="#3b0764" opacity="0.85" stroke="#94a3b8" strokeWidth="1" />
              {/* Bridge */}
              <line x1="47" y1="41" x2="53" y2="41" stroke="#94a3b8" strokeWidth="1.2" />
              <line x1="47" y1="39" x2="53" y2="39" stroke="#94a3b8" strokeWidth="1" />
              {/* Specular glare on glasses */}
              <line x1="36" y1="40" x2="43" y2="46" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
              <line x1="55" y1="40" x2="62" y2="46" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
            </svg>
          </div>
        )}

        {/* Hover Upload Overlay */}
        {editable && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white text-[10px] font-semibold gap-1 backdrop-blur-xs p-1">
            <Camera className="w-5 h-5 text-indigo-300" />
            <span className="text-center leading-tight">Change Photo</span>
          </div>
        )}
      </div>

      {/* Live Online Status Indicator */}
      {showStatus && (
        <span
          className={`absolute bottom-1 right-1 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm ${
            size === 'sm' ? 'w-2.5 h-2.5' : size === 'md' ? 'w-3.5 h-3.5' : 'w-4 h-4 sm:w-5 sm:h-5'
          }`}
          title="Candidate active & open for roles"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        </span>
      )}

      {/* Hidden File Input */}
      {editable && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInputChange}
        />
      )}

      {/* Notification Pill when photo is updated */}
      {uploadSuccess && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-semibold shadow-lg animate-in fade-in slide-in-from-bottom-2 flex items-center gap-1 z-30">
          <Check className="w-3 h-3" />
          <span>Profile photo updated!</span>
        </div>
      )}
    </div>
  );
};
