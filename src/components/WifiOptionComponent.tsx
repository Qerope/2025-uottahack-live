import React from 'react';
import { Wifi } from 'lucide-react';
import './WifiOptionComponent.css';

interface WifiOptionProps {
  networks: Array<{ name: string; description: string }>;
}

const WifiOptionComponent: React.FC<WifiOptionProps> = ({ networks }) => {
  return (
    <div className="wifi-container">
      <div className="wifi-info">
        <div className="wifi-icon-wrapper">
          <Wifi size={32} className="wifi-icon" />
        </div>
        <div className="wifi-text">
          {networks.map((network, index) => (
            <div key={network.name} className="network-info">
              <span className="network-name">{network.name}: </span>
              <span className="network-description">{network.description}</span>
              {index < networks.length - 1 && <br />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WifiOptionComponent;