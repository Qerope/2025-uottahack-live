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
	require('../assets/images/floor5.svg')
];

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 1024);
}

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
	  />
	);
  };

const MapView: React.FC = () => {
	const [button, setButton] = React.useState(1);
	const [image, setImage] = React.useState(floorImages[1]);

	const handleClick = (index: number) => {
		setButton(index);
		setImage(floorImages[index]);
	};

	return (
		<Container id="map-view" fluid>
		<h1 className="font-weight-bold mt-4 mb-4">
		Learning Crossroads (CRX)
		</h1>
		<h4>100 Louis-Pasteur Private, Ottawa, ON K1N 9N3</h4>
			<Col>
				<Row>
					<div className="d-flex flex-column">
						<div className='col-md-2 col-sm-12'>
							<ButtonGroup vertical={!useCheckMobileScreen()} className="button-group mr-2" style={{borderRadius:"1rem" }}>
								{floorImages.map((_, index) => (
									<Button
										className='p-3'
										key={`button-${index}`}
										onClick={() => handleClick(index)}
										style={{backgroundColor: index === button ? '#3C99D6' : '#f8f9fa', border:"0", fontWeight: index === button ? 700 : 400}}
										variant={index === button ? 'dark' : 'light'}
									>
										Floor {index}
									</Button>
								))}
							</ButtonGroup>
						</div>
					</div>
					<div className='col-md-10 col-sm-12'>
						<div className="floor-layouts">
							<EnlargableImage
								src={image}
								alt={`Floor ${button + 1} layout`} />
							Tap to zoom
						</div>
					</div>
				</Row>
			</Col>
		</Container>
	);
};

export default MapView;
