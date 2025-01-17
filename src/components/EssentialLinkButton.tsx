import React, { ReactNode } from 'react';
import './EssentialLinkButton.css';

interface EssentialLinkButtonProps {
  text: string;
  href: string;
  icon: ReactNode;
  className?: string;
}

const EssentialLinkButton: React.FC<EssentialLinkButtonProps> = ({ 
  text, 
  href, 
  icon,
  className = ''
}) => {
  return (
    <a href={href} className={`essential-link-button ${className}`} target="_blank" rel="noopener noreferrer">
      <div className="essential-link-button-icon">
        {icon}
      </div>
      <span className="essential-link-button-text">{text}</span>
    </a>
  );
};

export default EssentialLinkButton;