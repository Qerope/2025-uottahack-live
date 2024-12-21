import React, { useEffect, useState } from 'react';
import './MapView.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Row } from 'react-bootstrap';

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
    const [is3D, setIs3D] = useState(false);
    const [button, setButton] = useState(1);
    const [image, setImage] = useState(floorImages[1]);
    const isMobile = useCheckMobileScreen();

    const handleClick = (index: number) => {
        setButton(index);
        setImage(floorImages[index]);
    };

    const handleToggle3D = () => setIs3D((prev) => !prev);

    return (
        <Container id="map-view" fluid>
            <Row className="justify-content-center mb-4">
                <div
                    id="view-switch"
                    className={is3D ? 'active' : ''}
                    onClick={handleToggle3D}
                >
                    <div className="toggle-slider"></div>
                    <div className="toggle-label">
                        <span>3D</span>
                        <span>2D</span>
                    </div>
                </div>
            </Row>
            <Row className="justify-content-center align-items-center">
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
                        }}
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
                            <ButtonGroup
                                vertical={!isMobile}
                                className="button-group"
                                style={{
                                    borderRadius: '1.2rem',
                                    backgroundColor: 'rgba(42, 61, 101, 1)',
                                    padding: '0.5rem',
                                }}
                            >
                                {floorImages.map((_, index) => (
                                    <Button
                                        key={`button-${index}`}
                                        onClick={() => handleClick(index)}
                                        style={{
                                            backgroundColor:
                                                index === button
                                                    ? 'rgba(120, 144, 197, 1)'
                                                    : 'rgba(120, 144, 197, 1)',
                                            border: '0',
                                            fontWeight: index === button ? 700 : 400,
                                            width: '35px',
                                            height: '35px',
                                            fontSize: '1.2rem',
                                            borderRadius: '50%',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        {index}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </Col>
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default MapView;
