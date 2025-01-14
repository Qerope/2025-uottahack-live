import React, { useState } from 'react';
import './ChallengeView.css';
import { Row } from 'react-bootstrap';
import cienaLogo from '../assets/ciena--600 1.png';

interface ChallengeCardProps {
  name?: string;
  category?: string;
  title?: string;
  challenge?: JSX.Element;
  prize?: JSX.Element;
  logo?: string | null;
}

const ChallengeCard = ({
  name = "",
  category = "",
  title = "",
  challenge = <></>,
  prize = <></>,
  logo = null,
}: ChallengeCardProps) => (
  <div className='col-md-6 col-sm-12 mt-0 mb-5'>
    <div className="card p-3 mt-3 rounded">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div className="icon">
            {name}
          </div>
        </div>
        {category !== "" && (
          <div className="badge">
            <span>{category}</span>
          </div>
        )}
      </div>
      <div className="mt-4 ml-4 mb-3 text-content">
        <h3 className="heading">{title}</h3>
        <div className="mt-1">
          <div className="mt-3">
            <span className="text1">Challenge: <span className="text2">{challenge}</span></span>
          </div>
          {prize !== (<></>) && (
            <div className="mt-3">
              <span className="text1">Prizes 🏆: <span style={{ fontWeight: 'normal' }}>{prize}</span></span>
            </div>
          )}
        </div>
      </div>
      {/* Company logo */}
      <div className="company-logo-box">
        {logo ? <img src={logo} alt="Company Logo" /> : null}
      </div>
    </div>
  </div>
);

const ChallengesSection = () => (
  <div>
    <Row className='mt-3 center'>
      <ChallengeCard
        name="SurveyMonkey"
        title="Retail Monkey"
        challenge={(<span>Releasing 2025-01-17 @ 9:30 PM</span>)}
        prize={(<span>N/A</span>)}
      />
      <ChallengeCard
        name="testest"
        title="Scoreboard Challenge"
        challenge={(<span>Welcome to the uOttaHack 7 scoreboard challenge. Throughout the weekend, you are able to collect points by:
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
  </div>
);

const ChallengeView: React.FC = () => {
  const [challengesHidden, setChallengesHidden] = useState(true);

  return (
    <div id="challenge-view">
        <ChallengesSection />
    </div>
  );
};

export default ChallengeView;
