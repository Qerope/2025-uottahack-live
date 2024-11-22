import React from 'react';
import './InfoView.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Card, CardColumns } from 'react-bootstrap';
import Countdown from './Countdown';

const InfoCard = ({ title = "", desc = (<></>), link = "" }) => (
	<div className='col-md-6 col-sm-12  mt-2'>
		<div className="card p-3 mb-2 rounded">
			<div className="mt-2">
				{link != "" && <a href={link}> <h3 className="heading" style={{ fontWeight: 600 }}>{title}</h3> </a>}
				{link == "" && <h3 className="heading" style={{ fontWeight: 600 }}>{title}</h3>}
				<div className="mt-1">
					<div className="mt-3">
						{desc != (<></>) && <div className="mt-3">
							<span className="text1">{desc}</span> </div>}
					</div>
				</div>
			</div>
		</div>
	</div>
);

const ButtonCard = ({ title = "" }) => (
	<div className='col-md-6 col-sm-12 mt-2'>
		<div className="card p-3 mb-2 rounded">
            <h3 className="heading mt-2">{title}</h3>
            <br />
            <div className="row">
					<div className="col-md-6 mb-3">
						<a href='https://discord.gg/gBzRU4pJES'>
							<Button className='rounded mx-auto h-100 discord-button' style={{ width: '100%', minHeight: '60px' }}>
								<p className='font-weight-bold h4 mb-0'>Discord</p>
							</Button>
						</a>
					</div>
                <div className="col-md-6 mb-3">
					<a href='https://uottahack-6.devpost.com'>
						<Button className='rounded mx-auto h-100 devpost-button' style={{ width: '100%', minHeight: '60px' }}>
							<p className='font-weight-bold h4 mb-0'>DEVPOST</p>
						</Button>
					</a>
                </div>
                <div className="col-md-6 mb-3">
					<a href='https://discord.gg/gBzRU4pJES'>
						<Button className='rounded mx-auto h-100 guide-button' style={{ width: '100%', minHeight: '60px' }}>
							<p className='font-weight-bold h4 mb-0'>Hacker Guide</p>
						</Button>
					</a>
                </div>
                <div className="col-md-6 mb-3">
					<a href='https://discord.gg/gBzRU4pJES'>
						<Button className='rounded mx-auto h-100 help-button' style={{ width: '100%', minHeight: '60px' }}>
							<p className='font-weight-bold h4 mb-0'>Mentor Help</p>
						</Button>
					</a>
                </div>
            </div>
        </div>
    </div>
);




const DoubleInfoCard = ({ title1 = "", desc1 = (<></>), link1 = "", title2 = "", desc2 = (<></>), link2 = "" }) => (
	<div className='col-md-6 col-sm-12 mt-2' style={{ height: '100% !important' }}>
		<div className="card p-3 mb-2 rounded">
			<div className="mt-2">
			<h3>Wi-Fi</h3>
				<Row>
					<div className='col-md-6'>
						{link1 !== "" && <a href={link1}> <p className="heading" style={{ fontWeight: 600 }}>{title1}</p> </a>}
						{link1 === "" && <p className="heading mt-4" style={{ fontSize:'16pt', fontWeight: 600 }}>{title1}</p>}
						<div className="mt-1">
							<div className="mt-1">
								{desc1 !== (<></>) && <div className="mt-3">
									<span className="text1">{desc1}</span> </div>}
							</div>
						</div>
					</div>
					<div className='col-md-6'>
					{link1 !== "" && <a href={link1}> <p className="heading" style={{ fontWeight: 600 }}>{title2}</p> </a>}
						{link1 === "" && <p className="heading mt-4" style={{ fontSize:'16pt', fontWeight: 600 }}>{title2}</p>}
						<div className="mt-1">
							<div className="mt-3">
								{desc2 !== (<></>) && <div className="mt-3">
									<span className="text1">{desc2}</span> </div>}
							</div>
						</div>
					</div>
				</Row>
			</div>

		</div>
	</div>
);

const InfoSection = () => (
	<div>
		<Row className='mt-3 center'>
			<DoubleInfoCard
				title1="eduroam"
				desc1={(<>Eduroam is a campus-wide network. Feel free to join this network if your school email supports it.</>)}
				title2="guOttawa"
				desc2={(<>This network is in the CRX building only. It is an open connection with no authentication required.</>)}
			/>
			<ButtonCard
				title="Essential Links"
			/>
		</Row>

	</div>
);

const InfoView: React.FC = () => {
	return (
		<Container id="info-view" fluid>
			<h1 className="text-gradient font-weight-bold mt-4 mb-4">
				Information
			</h1>
			<Countdown targetDate="2024-03-01T21:30:00" />
			<Col>
				<Row className='g-4'>
					<InfoSection />
					<br></br>

				</Row>
			</Col>
			{/* <h2 style={{ textAlign: 'center', fontWeight: 800 }}>Good luck, and happy hacking!</h2> */}
		</Container>
	);
};

export default InfoView;
