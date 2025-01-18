import React, { useState, useEffect } from 'react';
import './ChallengeView.css';
import { Row } from 'react-bootstrap';
import solaceLogo from '../assets/images/Group 1169.png';
import surveyLogo from '../assets/images/Group 1168.png';
import qnxLogo from '../assets/images/QNX_201x_logo 1.png';
import navLogo from '../assets/images/image 7.png';
import groqLogo from '../assets/images/groq 1.png';
import deepcodeLogo from '../assets/images/Deepcode.png';
import huionLogo from '../assets/images/Group 1223.png';
import seedstudioLogo from '../assets/images/image 188.png';
import xppenLogo from "../assets/images/xp-pen 1.png";
import starknetLogo from "../assets/images/starknet.png";
import gadgetLogo from "../assets/images/gadget.png";

interface ChallengeCardProps {
  name?: string;
  category?: string;
  title?: string;
  challenge?: JSX.Element;
  prize?: JSX.Element;
  logo?: string | null;
}

const TruncatedText = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="truncated-text">
      <div
        className={`content ${!isExpanded ? 'truncated' : ''}`}
        style={{
          maxHeight: isExpanded ? 'none' : '100px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {children}
        {!isExpanded && (
          <div
            className="fade-overlay"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40px',
              background: 'linear-gradient(180deg, transparent, white)'
            }}
          />
        )}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="see-more-btn mt-2"
        style={{
          background: 'none',
          border: 'none',
          color: '#007bff',
          cursor: 'pointer',
          padding: '4px 8px',
          fontSize: '0.9rem'
        }}
      >
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

const TimedChallengeCard = ({
  name = "",
  category = "",
  title = "",
  challenge = <></>,
  prize = <></>,
  logo = null,
}: ChallengeCardProps) => {
  const [isReleaseTime, setIsReleaseTime] = useState(false);

  useEffect(() => {
    const checkReleaseTime = () => {
      const releaseDate = new Date('2025-01-18T04:00:00Z');
      const now = new Date();
      setIsReleaseTime(now >= releaseDate);
    };

    // Check immediately
    checkReleaseTime();

    // Check every minute
    const interval = setInterval(checkReleaseTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
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
          {isReleaseTime ? (
            <div className="mt-1">
              <div className="mt-3">
                <span className="text1">Challenge: 
                  <span className="text2">
                    <TruncatedText>{challenge}</TruncatedText>
                  </span>
                </span>
              </div>
              {prize !== (<></>) && (
                <div className="mt-3">
                  <span className="text1">Prizes 🏆: 
                    <span style={{ fontWeight: 'normal' }}>{prize}</span>
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-3">
              <p>Challenge details will be revealed on January 17th at 11:59 PM</p>
            </div>
          )}
        </div>
        <div className="company-logo-box">
          {logo ? <img src={logo} alt="Company Logo" /> : null}
        </div>
      </div>
    </div>
  );
};

const ChallengesSection = () => (
  <div>
    <Row className='mt-3 center'>
      <TimedChallengeCard
        name="Solace"
        title="Event-Driven Solutions"
        challenge={(<span>Build a project that communicates through a Solace Event Broker. Judged on how innovative it is towards solving a real world problem, as well as how appropriately you've leveraged Event-Driven Architecture (EDA) to solve it.</span>)}
        prize={(<span>$250 x 4 Amazon Gift Cards</span>)}
        logo={solaceLogo}
      />
      <TimedChallengeCard
        name="Survey Monkey"
        title="Retail Monkey"
        challenge={(<span>
          Most innovative use of the SurveyMonkey APIs to drive a simplified, natural  (meaning low friction) engagement with retail consumers to provide  feedback. Think along the lines of: people rarely answer the "how did we do" surveys at the bottom of their retail receipts / post electronic retail surveys. What's the most creative implementations  to get that engagement with consumers?
        </span>)}
        prize={(<span> <br /> 1st Place: 4 x $250 Amazon Gift Cards<br />2nd Place: $250 Amazon Gift Card<br />3rd Place: $100 Amazon Gift Card</span>)}
        logo={surveyLogo}
      />
      <TimedChallengeCard
        name="QNX Blackberry"
        title="Build on the QNX 8.0 Operating System Challenge"
        challenge={(<span>We challenge you to develop your hackathon project to run on a Raspberry Pi 4B using the QNX 8.0 Quick Start Target Image for Pi. Raspberry Pi 4 hardware and free QNX licenses are available to participating teams. 
          <br /> <br />
          Requirements: Hackers will require a free license for QNX 8.0 (available at https://www.qnx.com/getqnx). Raspberry Pi 4B hardware is available to participating teams on a first-come first-served basis. Get your license and gear early so you're ready to hack during the event! </span>)}
        prize={(<span>4 x $50 Amazon Canada Gift Cards</span>)}
        logo={qnxLogo}
      />
      <TimedChallengeCard
        name="NAV Canada"
        title="Joint Human-Machine System"
        challenge={(<span>As automation and AI become more pervasive, finding the right balance between human involvement and machine support is critical—especially in fields like Air Traffic Control, where automation has the potential to reduce human skills and situational awareness over time. In the event of an incident, the human may be held accountable for an outcome that resulted from significant automation input. Tetris, a game requiring quick decisions and sharp thinking, offers a great analogy for air traffic control. Your challenge is to design an AI or automation system that helps a human player achieve the highest possible Tetris score. The automation should have limitations that require the human to step in and make key decisions, ensuring the human remains meaningfully involved and accountable for the result.
          <br /> <br />
          Requirements: Open source libraries can be used as a basis for the Tetris game. Automation should be implemented to assist the user while keeping the human meaningfully involved and accountable for the result.
        </span>)}
        prize={(<span>$100 Amazon Gift Cards x 4 and a Tour of the NAV CANADA tower simulator in Ottawa</span>)}
        logo={navLogo}
      />
      <TimedChallengeCard
        name="Starknet"
        title="Best Use of Starknet"
        challenge={(<span>Create a blockchain application that makes the best use of abundant and cheap on-chain computation on Starknet. The smart contracts should be written in Cairo and the app must have a frontend for users to interact with. The app should be deployed to Starknet testnet and the frontend should be deployed to a public server. All code must be open source and available on Github.
          <br /> <br />
          Minimum conditions for a project to be eligible:
          Project includes at least one smart contract written in Cairo
          The app has a UI (web, mobile, Telegram, other)
          The smart contract must be deployed to Starknet testnet <br /> <br />
          Learning resources: <br />
          Cairo book: https://book.cairo-lang.org/ <br />
          Starklings: https://starklings.app/ <br />
          Basecamp: https://www.youtube.com/playlist?list=PLMXIoXErTTYUJByl_2kK7wxxaETj-KGKZ <br /> <br />
          Dev tools: <br />
          Scarb (package manager): https://docs.swmansion.com/scarb/ <br />
          Foundry (test runner and CLI): https://foundry-rs.github.io/starknet-foundry/ <br />
          Scaffold Stark (frontend toolkit): https://scaffoldstark.com/ <br />
          Starkscan (block explorer): https://starkscan.co/ <br />
          Braavos (wallet): https://braavos.app/ <br />
          Argent (wallet): https://www.argent.xyz/ <br />
          Dojo (game engine): https://www.dojoengine.org/ <br />
        </span>)}
        prize={(<span>All prizes to be paid in STRK tokens via OnlyDust on a Starknet wallet using the exchange rate of the final day of the hackathon. <br />
          1st Prize:🥇 $2,000 <br />
          2nd Prize: 🥈 $1,500 <br />
          3rd Prize: 🥉 $1,000 <br />
          Runner Ups: 3x $500</span>)}
        logo={starknetLogo}
      />
      <TimedChallengeCard
        name="Gadget"
        title="Gadget Full-Stack Web App Challenge"
        challenge={(<span>Gadget, the application development and hosting platform, is challenging students to leverage its new AI-assisted capabilities to build and launch a full-stack web app in three days. These apps can be for personal use, or aimed at being distributed to others. The challenge is to launch a fully hosted, full-stack app that solves a real-world problem. <br /> <br /> The application must: <br />
          • Be built entirely on Gadget <br />
          • Have a frontend, backend, and database <br />
          • Solve a real problem <br />
          • Look and work great</span>)}
        prize={(<span>TBD</span>)}
        logo={gadgetLogo}
      />
      <TimedChallengeCard
        name="Groq"
        title="Multimodal App Challenge"
        challenge={(<span>Build a creative and  interactive multimodal app powered by Groq. Projects are judged based on the number of modalities powered by Groq (text, vision, audio), how innovative it is to solve a real world problem, UX, and design.</span>)}
        prize={(<span>TBD</span>)}
        logo={groqLogo}
      />
      <TimedChallengeCard
        name="DeepCode"
        title="Rapid Analysis of Breached Account Data"
        challenge={(<span>The Challenge As part of our early warning application, we are required to quickly analyze large amounts of data leaked on various underground channels. To speed up this process, we are looking for an application that can parse, store, and enrich the intercepted data, making it searchable and eventually integrating it with other applications. The breached data we are capturing includes usernames, passwords, and URLs. To efficiently identify specific breached data, we need to parse large amounts of raw text data, ingest it into a database, and enrich it with as much additional information as possible. The challenge for this hackathon is to process very large text files containing breach data, parse the contents, store the parsed data in a MySQL database, enrich it with additional details, and make it searchable. This will help us quickly share breach information with affected organizations to initiate incident response.
          <br /> <br />
          The Details Breached data is frequently shared on underground channels and sold to various parties, including threat actors such as carders or ransomware actors. As part of our services, we intercept these breaches, identify high-risk accounts (such as those related to hospitals' VPNs, charitable organizations, and customer accounts), and prevent further attacks on their networks. The amount of data we intercept has now outpaced our simple scripts, and we need a more efficient solution to make our early warning application faster and more effective.
           <br /> <br /> 
           Your goal Create an application that can: <br />
          * Parse breach data from large text files. <br /> 
          * Store it in a relational database (MySQL). <br /> 
          * Enrich the data with additional information. <br /> 
          * Allow users to search the database and filter breach data. <br /> <br /> 
          Inputs: <br />
          You will be provided with large text files containing anywhere between 7,000 and 25,000,000 lines. Each line contains a URL, a username, and a password in the following format: URI USERNAME PASSWORD <br /> The URIs in these files may be valid, invalid, or improperly formatted.</span>)}
        prize={(<span>$300 Amazon Gift Cards x 4</span>)}
        logo={deepcodeLogo}
      />
      <TimedChallengeCard
        name="XP-Pen"
        title="🎨XP-Pen Challenge🎨"
        challenge={(<span>Unleash your creativity in the XP-Pen Challenge! Submit your best artwork, whether it's on paper or digital, and stand a chance to win incredible prizes.
          <br /> <br />
          🖌️ How to Participate:
          You can find paper and drawing utensils at the XP-Pen Challenge area on the 2nd floor outside the elevators to create physical art.
          Prefer digital? Use any digital art tools like Adobe products, Procreate, or draw on your iPad or other devices!
          Once you're done, submit your artwork along with a short description to our challenge form!
          <br /> <br />
          💡 Rules:
          Only original artwork will be accepted.
          Submissions can be either physical (paper) or digital.
          Submit your drawing by January 19th, 8:00 AM.
          Include a short description of your work.
          Follow @uottahack and @xppen on Instagram.
          Use the hashtag #xppenxuottahack if you share your artwork online to get featured on XP-Pen's Instagram.
        </span>)}
        prize={(<span> <br />1st Place: Artist 24 FHD <br />
          2nd Place: Artist 16 (2nd) <br />
          3rd Place: Artist 10 (2nd)</span>)}
        logo={xppenLogo}
      />
    <TimedChallengeCard
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
      prize={(<span>4x Huion Q11K Tablets (one per team member)</span>)}
      logo={huionLogo}
    />
    <TimedChallengeCard
        name="Seed Studio"
        title="Best Use of Seeed Studio Hardware"
        challenge={(<span>Show off your hardware hacking skills in the Seeed Studio Challenge! The team with the best hardware-based project that creatively incorporates Seeed Studio products will take home amazing prizes. 
          <br /> <br /> How to Participate: <br />
          • Visit the Hardware Zone table to rent Seeed Studio hardware for your project. <br />
          • Build a hardware-based project that incorporates Seeed Studio products in a meaningful and innovative way. <br />
          • Submit your final project to DoraHacks and indicate that you're competing in the Seeed Studio Challenge. <br /> <br /> Rules: <br />
          • Your project must incorporate at least one Seeed Studio product. <br />
          • Hardware must be rented from the Hardware Zone or provided by the participants. <br />
          • All work must be completed during the hackathon. <br />
          • Teams can have up to 4 members. <br />
          • Clearly explain how Seeed Studio hardware was integrated into your project. </span>)}
        prize={(<span>4x ReSpeaker Lite Voice Assistant Kits and 4x $25 Seeed Studio Gift Cards</span>)}
        logo={seedstudioLogo}
      />
    </Row>
  </div>
);

const ChallengeView: React.FC = () => {
  return (
    <div id="challenge-view">
      <ChallengesSection />
    </div>
  );
};

export default ChallengeView;