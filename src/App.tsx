import React from 'react';
import './App.css';

import { ROUTES_WITH_TITLES } from './constants';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import { Helmet } from 'react-helmet';
import opengraph_image from './assets/og-image.jpg'; 
import twittercard_image from './assets/twitter-card.jpg'; 

// Metadata for the page
export const metadata = {
  title: "uOttaHack 7",
  description:
    "Join us to attend uOttaHack 7, the most anticipated hackathon in Ottawa, proudly celebrating 7 years of innovation, creativity, and community. This year, we’re leveling up the hacker experience with exciting new initiatives, exclusive workshops, inspiring keynote speakers, and unforgettable activities. Whether you're a seasoned hacker or a first-timer, uOttaHack 7 promises to be an incredible weekend of collaboration, learning, and fun.",
  openGraph: {
    type: 'website',
    title: "uOttaHack 7 - 2025",
    description: "Join us to attend uOttaHack 7, the most anticipated hackathon in Ottawa.",
    url: "https://2025.uOttahack.com",
    images: [
      {
        url: opengraph_image,
        width: 1200,
        height: 630,
        alt: "uOttaHack 7",
      },
    ],
    siteName: "uOttaHack",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "uOttaHack 7 - 2025",
    description: "Join us for uOttaHack 7; the most anticipated hackathon in Ottawa.",
    images: [
      {
        url: twittercard_image,
        width: 800,
        height: 418,
        alt: "uOttaHack 7",
      },
    ],
    site: "@uOttaHack",
  },
  appleWebApp: {
    title: "uOttaHack 7",
    statusBarStyle: "black-translucent",
  },
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
        <meta name="twitter:image:width" content={metadata.twitter.images[0].width.toString()} />
        <meta name="twitter:image:height" content={metadata.twitter.images[0].height.toString()} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        <meta name="apple-mobile-web-app-title" content={metadata.appleWebApp.title} />
        <meta name="apple-mobile-web-app-status-bar-style" content={metadata.appleWebApp.statusBarStyle} />
      </Helmet>
      <Router>
        <NavBarComponent />
        <div id="switch">
          <Switch>
            {ROUTES_WITH_TITLES.map((routeItem, index) => (
              <Route
                key={`${routeItem.title}-${index}`}
                exact={index === 0}
                path={routeItem.path}
                component={routeItem.component}
              />
            ))}
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
