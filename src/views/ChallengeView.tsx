import React from 'react';

import './ChallengeView.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Card, Row } from 'react-bootstrap';

const ChallengeCard = ({ name = "", category = "", title = "", challenge = (<></>), prize = (<></>) }) => (
	<div className='col-md-6 col-sm-12 mt-0 mb-5'>
		<div className="card p-3 mt-3 rounded">
			<div className="d-flex justify-content-between">
				<div className="d-flex flex-row align-items-center">
					<div className="icon"> <img src={require("../assets/images/" + name.toLocaleLowerCase() + ".png")} height={"30px"} /> </div>
				</div>
				{category != "" && <div className="badge"> <span>{category}</span> </div>}
			</div>
			<div className="mt-2">
				<br></br>
				{/* <p className="heading">Releasing 2024-03-01 @ 9:30 PM</p> */}
				<h3 className="heading">{title}</h3>
				<div className="mt-1">
					<div className="mt-3">
						<span className="text1">Challenge:
							<span className="text2"> {challenge}</span></span> </div>
					{prize != (<></>) && <div className="mt-3">
						<span className="text1">Prizes 🏆: <span style={{fontWeight:'normal'}}>{prize}</span></span> </div>}
				</div>
				
			</div>
			
		</div>
	</div>
);

const ChallengesSection = () => (
	<div>
		<h1 className="text-gradient font-weight-bold mt-4">
			Challenges
		</h1>
		<Row className='mt-3 center'>
			<ChallengeCard
				name="Solace"
				title="Solace Challenge Title"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="Ford"
				title="Ford Challenge Title"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="CSE"
				title="CSE Challenge Title"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="Patagonia"
				title="Patagonia Challenge Title"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="po"
				title="Office of The President Challenge Title"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="eh"
				title="Scoreboard Challenge"
				challenge={(<span>
					Welcome to the uOttaHack 6 scoreboard challenge. Throughout the weekend, you are able to collect points by:
					<div style={{ marginTop: '6px' }}>
					  <ul>
						<li>1 Point - Attending a workshop.</li>
						<li>4 Points - Submitting a project.</li>
						<li>8 Points - Finding a 2018 uOttaHack Sticker.</li>
					  </ul>
					</div>
				  </span>)}
				prize={(<span>3 x $525 (Top 3 Scores)</span>)}
			/>
		</Row>

		<Row className='mt-3 mb-5 center'>
			<ChallengeCard
				name="adobe"
				title="Most Creative Adobe Express Add-On"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="auth"
				title="Best Use of Auth0"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="tech"
				title="Best .Tech Domain Name"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="flow"
				title="Best Use of Flow"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="fidelity"
				title="Best DEI Hack sponsored by Fidelity"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="kintone"
				title="Best Use of Kintone"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>
			<ChallengeCard
				name="redbull"
				title="Red Bull Can You Make It?"
				challenge={(<span>Releasing 2024-03-01 @ 9:30 PM</span>)}
				prize={(<span>N/A</span>)}
			/>

		</Row>

	</div>
);
const ChallengeView: React.FC = () => {
	return (
		<Container id="contact-view" fluid>
			<ChallengesSection />
		</Container>
	);
};

export default ChallengeView;
