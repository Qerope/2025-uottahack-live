import React from 'react';
import './InfoView.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countdown from './Countdown';
import EssentialLinkGrid from '../components/EssentialLinkGrid';
import WifiOptionComponent from '../components/WifiOptionComponent';

const InfoView: React.FC = () => {
  const wifiNetworks = [
    {
      name: "Eduroam",
      description: "Campus-wide network. Feel free to join this network if your school email supports it."
    },
    {
      name: "uoPublic",
      description: "Open connection network with no authentication required."
    }
  ];

  return (
    <Container id="info-view" fluid>
      <div className="grid-container">
        <EssentialLinkGrid />
      </div>
      <Row className="wifi-section justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <WifiOptionComponent networks={wifiNetworks} />
        </Col>
      </Row>
    </Container>
  );
};

export default InfoView;