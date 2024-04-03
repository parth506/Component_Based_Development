// pages/About.js
import React from 'react';
import Card from '../components/Card';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is a paragraph of additional content on the about page.</p>
      <Card
        title="Team Member"
        image="https://via.placeholder.com/150"
        description="Meet our amazing team!"
      />
    </div>
  );
};

export default About;
