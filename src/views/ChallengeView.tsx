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
      name="Solace"
      title="Event-Driven Solutions"
      challenge={(<span>Build a project that communicates through a Solace Event Broker. Judged on how innovative it is towards solving a real world problem, as well as how appropriately you've leveraged Event-Driven Architecture (EDA) to solve it.</span>)}
      prize={(<span>$250 x 4 Amazon Gift Cards</span>)}
    />
    <ChallengeCard
      name="Survey Monkey"
      title="Retail Monkey"
      challenge={(<span>
        Most innovative use of the SurveyMonkey APIs to drive a simplified, natural  (meaning low friction) engagement with retail consumers to provide  feedback. Think along the lines of: people rarely answer the “how did we do” surveys at the bottom of their retail receipts / post electronic retail surveys. What’s the most creative implementations  to get that engagement with consumers?
      </span>)}
      prize={(<span>1st Place: 4 x $250 Amazon Gift Cards<br />2nd Place: $250 Amazon Gift Card<br />3rd Place: $100 Amazon Gift Card</span>)}
    />
    <ChallengeCard
      name="QNX Blackberry"
      title="QNX 8.0 OS Challenge"
      challenge={(<span>We challenge you to develop your hackathon project to run on a Raspberry Pi 4B using the QNX 8.0 Quick Start Target Image for Pi. Raspberry Pi 4 hardware and free QNX licenses are available to participating teams. 
        <br /> <br />
        Requirements: Hackers will require a free license for QNX 8.0 (available at https://www.qnx.com/getqnx). Raspberry Pi 4B hardware is available to participating teams on a first-come first-served basis. Get your license and gear early so you're ready to hack during the event! </span>)}
      prize={(<span>4 x $50 Amazon Canada Gift Cards</span>)}
    />
    <ChallengeCard
      name="NAV Canada"
      title="Joint Human-Machine System"
      challenge={(<span>As automation and AI become more pervasive, finding the right balance between human involvement and machine support is critical—especially in fields like Air Traffic Control, where automation has the potential to reduce human skills and situational awareness over time. In the event of an incident, the human may be held accountable for an outcome that resulted from significant automation input. Tetris, a game requiring quick decisions and sharp thinking, offers a great analogy for air traffic control. Your challenge is to design an AI or automation system that helps a human player achieve the highest possible Tetris score. The automation should have limitations that require the human to step in and make key decisions, ensuring the human remains meaningfully involved and accountable for the result.</span>)}
      prize={(<span>$100 Amazon Gift Cards x 4 and a Tour of the NAV CANADA tower simulator in Ottawa</span>)}
    />
    <ChallengeCard
      name="Starknet"
      title="Best Use of Starknet"
      challenge={(<span>Create a blockchain application leveraging Starknet with smart contracts in Cairo and a user-friendly frontend.</span>)}
      prize={(<span>1st Prize: $2,000<br />2nd Prize: $1,500<br />3rd Prize: $1,000<br />Runner Ups: 3 x $500</span>)}
    />
    <ChallengeCard
      name="Groq"
      title="Multimodal App Challenge"
      challenge={(<span>Build a creative and  interactive multimodal app powered by Groq. Projects are judged based on the number of modalities powered by Groq (text, vision, audio), how innovative it is to solve a real world problem, UX, and design.</span>)}
      prize={(<span>TBD</span>)}
    />
    <ChallengeCard
      name="DeepCode"
      title="Breached Account Data Analysis"
      challenge={(<span>Create an application to parse, store, enrich, and make searchable large text files containing breach data.</span>)}
      prize={(<span>$300 Amazon Gift Cards x 4</span>)}
    />
    <ChallengeCard
      name="Huion"
      title="Best UI/UX Design"
      challenge={(<span>Calling all creators and innovators! Compete in the Huion Challenge and show off your team’s exceptional UI/UX skills and overall project design. 
        <br /> <br />
        How to Participate:
        <br />
        • Ensure your project demonstrates exceptional UI/UX design and showcases overall thoughtful and intuitive project design. <br />
        • Highlight the visual appeal, user experience, and design details during your project submission and judging. <br />
        • Submit your final project to DoraHacks and indicate you’re competing in the Huion Challenge. <br /> <br /> Rules: <br />
        • The project must be created during the hackathon. <br />
        • Teams can have up to 4 members. <br />
        • UI/UX and design must be original work created during the event. <br /> <br />
        Show us your creative brilliance and design skills, and take home this amazing prize! Good luck! </span>)}
      prize={(<span>Winning Team: 4x Huion Q11K Tablets (one per team member)</span>)}
    />
    <ChallengeCard
      name="Seed Studio"
      title="Best Use of Seeed Studio Hardware"
      challenge={(<span>Show off your hardware hacking skills in the Seeed Studio Challenge! The team with the best hardware-based project that creatively incorporates Seeed Studio products will take home amazing prizes. 
        <br /> <br /> How to Participate: <br />
        • Visit the Hardware Zone table to rent Seeed Studio hardware for your project. <br />
        • Build a hardware-based project that incorporates Seeed Studio products in a meaningful and innovative way. <br />
        • Submit your final project to DoraHacks and indicate that you’re competing in the Seeed Studio Challenge. <br /> <br /> Rules: <br />
        • Your project must incorporate at least one Seeed Studio product. <br />
        • Hardware must be rented from the Hardware Zone or provided by the participants. <br />
        • All work must be completed during the hackathon. <br />
        • Teams can have up to 4 members. <br />
        • Clearly explain how Seeed Studio hardware was integrated into your project. </span>)}
      prize={(<span>4x ReSpeaker Lite Voice Assistant Kits and 4x $25 Seeed Studio Gift Cards</span>)}
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
