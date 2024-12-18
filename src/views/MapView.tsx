import React, { useEffect, useState } from 'react';
import './MapView.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Row, Form } from 'react-bootstrap';

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
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
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
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        document.body.appendChild(modal);
    };

    return (
        <img
            data-enlargable
            className="img-enlargable"
            src={src}
            alt={alt}
            onClick={handleClick}
            style={{ width: '100%', height: 'auto' }} // Adjust image size here
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

    return (
        <Container id="map-view" fluid>
            <Row className="justify-content-center mb-4">
                <Form.Check
                    type="switch"
                    id="view-switch"
                    label={is3D ? '3D View' : '2D View'}
                    checked={is3D}
                    onChange={() => setIs3D(!is3D)}
                    className="text-center"
                />
            </Row>
            <Row className="justify-content-center align-items-center">
                {is3D ? (
                    <iframe
                        href="https://www.mappedin.com/"
                        title="Mappedin Map"
                        name="Mappedin Map"
                        allow="clipboard-write 'self' https://app.mappedin.com; web-share 'self' https://app.mappedin.com"
                        scrolling="no"
                        width="90%"
                        height="630"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://app.mappedin.com/map/673b8c34deb617000bf4dad3?embedded=true"
                    ></iframe>
                ) : (
                    <Row className="map-layout d-flex align-items-center">
                        <Col md={2} className="button-column justify-content-end">
                            <ButtonGroup
                                vertical={!isMobile}
                                className="button-group"
                                style={{
                                    borderRadius: '2rem',
                                    backgroundColor: 'rgba(42, 61, 101, 1)',
                                    padding: '0.5rem', // Adjust padding for smaller size
                                }}
                            >
                                {floorImages.map((_, index) => (
                                    <Button
                                        className="floor-button"
                                        key={`button-${index}`}
                                        onClick={() => handleClick(index)}
                                        style={{
                                            backgroundColor:
                                                index === button ? 'rgba(120, 144, 197, 1)' : 'rgba(120, 144, 197, 1)',
                                            border: '0',
                                            fontWeight: index === button ? 700 : 400,
                                            width: '40px', // Smaller width
                                            height: '40px', // Smaller height
                                            fontSize: '1.2rem', // Smaller font size
                                            borderRadius: '50%',
                                            marginBottom: '0.5rem',
                                            outline: 'none',
                                            boxShadow: 'none'
                                        }}
                                        variant={index === button ? 'dark' : 'light'}
                                    >
                                        {index}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </Col>
                        <Col md={8} className="image-column">
                            <div className="floor-layouts text-center">
                                <EnlargableImage
                                    src={image}
                                    alt={`Floor ${button + 1} layout`}
                                    style={{ width: '80%', height: 'auto' }} // Adjust image size here
                                />
                                <p className="text-muted">Tap to zoom</p>
                            </div>
                        </Col>
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default MapView;