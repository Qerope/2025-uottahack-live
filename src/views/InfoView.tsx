import React from 'react';
import './InfoView.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Countdown from './Countdown';

interface ButtonCardProps {
	title: React.ReactNode; 
  }

const DoubleInfoCard = ({ title1 = "", desc1 = (<></>), link1 = "", title2 = "", desc2 = (<></>), link2 = "" }) => (
	<div className='col-md-6 col-sm-12 mt-2' style={{ height: '100% !important' }}>
	  <div className="card p-3 mb-2 rounded">
		<div>
		  <p className="heading mt-1 mb-4 title-gradient" >uOttaHack 7 @ CRX Building</p>
		  <p className="heading mt-2" style={{ fontSize: '14pt', fontWeight: 600 }}>Wifi Options:</p>
  
		  <div className="d-flex flex-column">
			<div className="mt-1">
			  <p className="heading" style={{ fontSize: '14pt', fontWeight: 600 }}>• eduroam</p>
			  <div className="mt-1">
				<span className="text1" style={{ fontWeight: 'normal', fontSize: '14pt' }}>
				  Eduroam is a campus-wide network. Feel free to join this network if your school email supports it.
				</span>
			  </div>
			</div>
			<div className="mt-1">
			  <p className="heading" style={{ fontSize: '14pt', fontWeight: 600 }}>• guOttawa</p>
			  <div className="mt-1">
				<span className="text1" style={{ fontWeight: 'normal', fontSize: '14pt' }}>
				  This network is in the CRX building only. It is an open connection with no authentication required.
				</span>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );
  
const ButtonCard: React.FC<ButtonCardProps> = ({ title }) => (
	<div className='col-md-6 col-sm-12 mt-2'>
	  <div className="card p-3 mb-2 rounded">
		<h1 className="heading mt-1 mb-1 ">{title}</h1>
		<div className="row">
		  <div className="col-md-6 mb-3">
			<a href='https://apply.uottahack.ca/discord'>
			  <Button className='rounded mx-auto h-100 discord-button act-button' style={{ width: '100%', minHeight: '60px' }}>
				<p className='font-weight-bold h4 mb-0'>Discord</p>
			  </Button>
			</a>
		  </div>
		  <div className="col-md-6 mb-3">
			<a href="https://dorahacks.io/hackathon/uottahack7">
				<Button
				className="rounded mx-auto h-100 dorahacks-button act-button"
				style={{ width: "100%", minHeight: "60px", position: "relative" }}
				>
				<p className="font-weight-bold h4 mb-0">DoraHacks</p>
				<span className="emergency-tooltip">
					For Emergency preparedness: <a href="tel:+13106007653">+1-310-600-7653</a>
				</span>
				</Button>
			</a>
			</div>
		  <div className="col-md-6 mb-3">
			<a href='/hacker-guide.pdf'>
			  <Button className='rounded mx-auto h-100 guide-button act-button' style={{ width: '100%', minHeight: '60px' }}>
				<p className='font-weight-bold h4 mb-0'>Hacker Guide</p>
			  </Button>
			</a>
		  </div>
		  <div className="col-md-6 mb-3">
			<a href='https://apply.uottahack.ca/discord'>
			  <Button className='rounded mx-auto h-100 help-button act-button' style={{ width: '100%', minHeight: '60px' }}>
				<p className='font-weight-bold h4 mb-0'>Mentor Help!</p>
			  </Button>
			</a>
		  </div>
		</div>
	  </div>
	</div>
  );
  
  const InfoSection = () => (
	<div>
	  <Row className='mt-1 center'>
		<DoubleInfoCard
		  title1="eduroam"
		  desc1={(<>Eduroam is a campus-wide network. Feel free to join this network if your school email supports it.</>)}
		  title2="guOttawa"
		  desc2={(<>This network is in the CRX building only. It is an open connection with no authentication required.</>)}
		/>
		<ButtonCard
		  title={<span className="title-gradient">Essential Links</span>}
		/>
	  </Row>
	</div>
  );
  
  const InfoView: React.FC = () => {
	const isInfoViewVisible = true;
  
	if (!isInfoViewVisible) {
	  return (
		<Container id="info-view" fluid>
		  <h1 className="hacker-countdown-title font-weight-bold mt-4 mb-4">
			Hacker Countdown
		  </h1>
		  <Countdown targetDate="2025-01-17T18:00:00" />
		</Container>
	  );
	}
  
	return (
	  <Container id="info-view" fluid>
		<h1 className="hacker-countdown-title font-weight-bold mt-4 mb-4">
		  Hacker Countdown
		</h1>
		<Countdown targetDate="2025-01-17T18:00:00" />
		<Col>
		  <Row className="g-4">
			<InfoSection />
			<br />
		  </Row>
		</Col>
	  </Container>
	);
  };
  
  
  export default InfoView;
  
  