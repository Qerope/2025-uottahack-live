import React, { useEffect, useState } from 'react';
import './MapView.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Row } from 'react-bootstrap';
import FloorButtonMenu from '../components/FloorButtonMenu';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton

const floorImages = [
    require('../assets/images/floor0.svg'),
    require('../assets/images/floor1.svg'),
    require('../assets/images/floor2.svg'),
    require('../assets/images/floor3.svg'),
    require('../assets/images/floor4.svg'),
    require('../assets/images/floor5.svg'),
];

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width <= 1024;
};

const EnlargableImage = ({ src, alt }: { src: string; alt: string }) => {
    const handleClick = () => {
        const modal = document.createElement('div');
        modal.style.cssText = `
            background: RGBA(0,0,0,.5) url('${src}') no-repeat center;
            z-index: 10000;
            top: 0;
            left: 0;
            cursor: zoom-in;
            position: absolute;
            width: 100%; 
            height: 100%;
            background-size: contain;
            overflow-y: scroll;
        `;
        modal.addEventListener('click', () => document.body.removeChild(modal));
        document.body.appendChild(modal);
    };

    return (
        <img
            data-enlargable
            className="img-enlargable"
            src={src}
            alt={alt}
            onClick={handleClick}
            style={{ width: '100%', height: 'auto' }}
        />
    );
};

const MapView: React.FC = () => {
    const [is3D, setIs3D] = useState(true);
    const [button, setButton] = useState(1);
    const [image, setImage] = useState(floorImages[1]);
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const isMobile = useCheckMobileScreen();

    const handleClick = (index: number) => {
        setButton(index);
        setImage(floorImages[index]);
    };

    const handleToggle3D = () => setIs3D((prev) => !prev);

    const handleIframeLoad = () => {
        setIsIframeLoaded(true);
    };

    return (
        <Container id="map-view" fluid>
            <Row className="justify-content-between align-items-center">
                <h1 className="hacker-countdown-title font-weight-bold mb-3 p-0">
                    Event Map
                </h1>
                <div
                    id="view-switch"
                    className={`${is3D ? 'active' : ''} mt-4`}
                    onClick={handleToggle3D}
                >
                    <div className="toggle-slider"></div>
                    <div className="toggle-label">
                        <span style={{ marginLeft: "3px", marginTop: "1.2px" }}>3D</span>
                        <span style={{ marginRight: "1px", marginTop: "1.2px" }}>2D</span>
                    </div>
                </div>
                <p style={{ fontSize: '1.1rem' }}>
                    Hey hackers, sponsors, volunteers, and mentors! uOttaHack 7 will be taking place at the Learning Crossroads (CRX) building at the University of Ottawa. Check out our 3D and 2D maps below to help navigate the event. You can search for specific rooms, sponsor locations, events, and much more! Feel free to explore the venue and make the most of the weekend! The maps will guide you to everything you need to ensure you have an amazing time. See you around the event!
                </p>
            </Row>


            <Row className="justify-content-center align-items-center mt-4">
                {is3D ? (
                    <iframe
                        title="Mappedin Map"
                        src="https://app.mappedin.com/map/67648873c13a13000bfdf797?embedded=true"
                        scrolling="no"
                        width="100%"
                        height="630"
                        frameBorder="0"
                        style={{
                            border: '0',
                            borderRadius: '15px',
                        }}
                        onLoad={handleIframeLoad}
                    ></iframe>
                ) : (
                    <Row className="map-layout d-flex align-items-center">
                    <Col md={8} className="image-column">
                      <div className="floor-layouts text-center">
                        <EnlargableImage
                          src={image}
                          alt={`Floor ${button + 1} layout`}
                        />
                        <p className="text-muted">Tap to zoom</p>
                      </div>
                    </Col>
                    <Col md={2} className="button-column">
                      <FloorButtonMenu
                        floorImages={floorImages}
                        selectedFloor={button}
                        onFloorChange={handleClick}
                        isMobile={isMobile}
                      />
                    </Col>
                  </Row>
                )}
                {!isIframeLoaded && <div className="loading-spinner">Loading 3D Map...</div>}
            </Row>
        </Container>
    );
};

export default MapView;