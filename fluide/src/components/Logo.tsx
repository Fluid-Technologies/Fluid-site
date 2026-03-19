import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'color', showText = true }) => {
  const isDark = variant === 'dark';
  const isLight = variant === 'light';
  
  const iconColor = isLight ? 'white' : '#1E234D';
  const cyanColor = '#4EF2D8';
  const textColor = isLight ? 'white' : '#1E234D';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        width="30"
        height="44"
        viewBox="0 0 30 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path d="M0 0 H25 A5 5 0 0 1 25 10 H10 V20 H17 A5 5 0 0 1 17 30 H5 A5 5 0 0 1 0 25 V0 Z" fill={iconColor} />
        <circle cx="5" cy="39" r="5" fill={cyanColor} />
      </svg>
      
      {showText && (
        <div className="flex flex-col justify-center">
          <span 
            className="font-bold text-2xl tracking-tight leading-none"
            style={{ color: textColor }}
          >
            Fluide
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
