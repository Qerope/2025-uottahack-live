import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './FloorButtonMenu.css';

interface FloorButtonMenuProps {
  floorImages: string[]; /* string of floor pictures */
  selectedFloor: number;
  onFloorChange: (floorIndex: number) => void;
  isMobile: boolean;
}

const FloorButtonMenu: React.FC<FloorButtonMenuProps> = ({
  floorImages,
  selectedFloor,
  onFloorChange,
  isMobile,
}) => {
  return (
    <ButtonGroup
      vertical={!isMobile}
      className="floor-button-group"
    >
      {floorImages.map((_, index) => (
        <Button
          key={`floor-button-${index}`}
          onClick={() => onFloorChange(index)}
          className={`floor-button ${index === selectedFloor ? 'selected' : ''}`}
        >
          {index}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FloorButtonMenu;