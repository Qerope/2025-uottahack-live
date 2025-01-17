import React from 'react';

import './EssentialLinkGrid.css';
import EssentialLinkButton from './EssentialLinkButton';

import { ReactComponent as DiscordIcon } from '../assets/discord.svg';
import { ReactComponent as DoraHacksIcon } from '../assets/dorahacks.svg';
import { ReactComponent as GuideIcon } from '../assets/book.svg';
import { ReactComponent as MentorIcon } from '../assets/person.svg';



const EssentialLinkGrid: React.FC = () => {
  return (
    <div className="button-grid">
      <EssentialLinkButton 
        icon={<DiscordIcon />} 
        text="Discord" 
        href="https://apply.uottahack.ca/discord" 
        className="discord"
      />
      <EssentialLinkButton 
        icon={<DoraHacksIcon />} 
        text="DoraHacks" 
        href="https://dorahacks.io/hackathon/uottahack7" 
        className="dorahacks"
      />
      <EssentialLinkButton 
        icon={<GuideIcon />} 
        text="Hacker Guide" 
        href="https://uottahack.notion.site/uOttaHack-VII-Ultimate-Guide-172bd45d0a7a80fea3c1eb2c8b6aa2cd" 
        className="guide"
      />
      <EssentialLinkButton 
        icon={<MentorIcon />} 
        text="Mentor Help" 
        href="https://apply.uottahack.ca/discord" 
        className="mentor"
      />
    </div>
  );
};

export default EssentialLinkGrid;