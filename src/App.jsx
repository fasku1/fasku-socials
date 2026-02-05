import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Button, Stack, Card } from 'react-bootstrap';

import fasku from './assets/images/mecrop.jpg'
import kenma from './assets/images/kenma.jpg'

import discord from './assets/icons/discord.svg'
import twitch from './assets/icons/twitch.svg'
import youtube from './assets/icons/youtube.svg'
import instagram from './assets/icons/instagram.svg'

const links = [
  { name: "Discord", url: "https://www.discord.gg/NkGs8ht", color: "dark", icon: discord },
  { name: "Twitch", url: "https://www.twitch.tv/fasku_", color: "outline-dark", icon: twitch },
  { name: "YouTube", url: "https://www.youtube.com/@Fasku", color: "outline-dark", icon: youtube },
  { name: "Instagram", url: "https://www.instagram.com/fas.ku", color: "danger", icon: instagram },
];

function App() {

  const img1 = fasku;
  const img2 = kenma;

  const [profilePic, setProfilePic] = useState(img1);

  const togglePic = () => {
    // If it's img1, change to img2. Otherwise, change back to img1.
    setProfilePic(profilePic === img1 ? img2 : img1);
  };

  return (
    <Container className="py-5 text-center" style={{ maxWidth: '400px' }}>
      {/* Profile Section */}
      <img
        src={profilePic} // Use the state variable here
        alt="Profile"
        className="rounded-circle mb-3 shadow-sm"
        onClick={togglePic} // Trigger the function on click
        style={{ cursor: 'pointer', width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <h2 className="fw-bold" style={{ fontSize: '30px' }}>@Fasku</h2>
      <p className="text-muted" style={{ fontSize: '18px' }} >Welcome to my space 🚀</p>

      {/* Links Section */}
      <Stack gap={3} className="mt-4">
        {links.map((link, index) => (
  <Card
    key={index}
    as="a"
    href={link.url}
    target="_blank"
    className="mb-4 text-decoration-none shadow-sm"
    style={{ borderRadius: '15px', overflow: 'hidden' }}
  >
    <Card.Body
      style={{
        display: 'grid',
        // Increased from 40px to 60px to balance larger icons
        gridTemplateColumns: '60px 1fr 60px', 
        alignItems: 'center',
        padding: '20px' // Increased padding for a chunkier button feel
      }}
    >
      {/* 1. Icon Column */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={link.icon}
          alt=""
          // Increased icon size from 25px to 35px
          style={{ width: '35px', height: '35px', objectFit: 'contain' }} 
        />
      </div>

      {/* 2. Text Column */}
      {/* Changed fs-5 to fs-3 for significantly larger text */}
      <span className="fw-bold fs-3 text-dark" style={{ textAlign: 'center', fontSize: '18px' }}>
        {link.name}
      </span>

      {/* 3. Spacer (Matching the 60px width) */}
      <div style={{ width: '60px' }}></div>
    </Card.Body>
  </Card>
))}
      </Stack>
    </Container>
  );
}

export default App
