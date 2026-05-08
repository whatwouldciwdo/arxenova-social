import './GlassIcons.css';
import React from 'react';

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(hsl(223, 90%, 65%), hsl(208, 90%, 65%))',
  purple: 'linear-gradient(hsl(283, 90%, 65%), hsl(268, 90%, 65%))',
  red: 'linear-gradient(hsl(3, 90%, 65%), hsl(348, 90%, 65%))',
  indigo: 'linear-gradient(hsl(253, 90%, 65%), hsl(238, 90%, 65%))',
  orange: 'linear-gradient(hsl(43, 90%, 65%), hsl(28, 90%, 65%))',
  green: 'linear-gradient(hsl(123, 90%, 65%), hsl(108, 90%, 65%))',
  cyan: 'linear-gradient(hsl(173, 90%, 60%), hsl(188, 90%, 60%))',
  magenta: 'linear-gradient(hsl(323, 90%, 65%), hsl(338, 90%, 65%))',
  coral: 'linear-gradient(hsl(13, 100%, 65%), hsl(358, 100%, 65%))',
};

interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label?: string;
  customClass?: string;
}

interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => (
        <button key={index} className={`icon-btn ${item.customClass || ''}`} aria-label={item.label || "icon"} type="button">
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)}></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          {item.label && <span className="icon-btn__label">{item.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
