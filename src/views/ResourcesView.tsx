import React from 'react';
import './ChallengeView.css';
import { Row } from 'react-bootstrap';
import cienaLogo from '../assets/ciena--600 1.png';

interface ResourcesCardProps {
  name?: string;
  category?: string;
  title?: string;
  challenge?: JSX.Element;
  prize?: JSX.Element;
  logo?: string | null;
}

const ResourcesCard = ({
  name = "",
  category = "",
  title = "",
  challenge = <></>,
  prize = <></>,
  logo = null,
}: ResourcesCardProps) => (
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
          </div>
          {prize !== (<></>) && (
            <div className="mt-3">
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

const ResourcesSection = () => (
  <div>
    <Row className='mt-3 center'>
      <ResourcesCard
        name="name"
        title="title"
        //challenge={(<span>Releasing 2025-01-17 @ 9:30 PM</span>)}
        //logo={cienaLogo}
      />
    </Row>
  </div>
);

const ResourcesView: React.FC = () => {
  return (
    <div id="challenge-view">
        <ResourcesSection />
    </div>
  );
};

export default ResourcesView;
