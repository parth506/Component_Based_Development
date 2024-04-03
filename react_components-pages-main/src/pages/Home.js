// pages/Home.js
import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>This is a paragraph of additional content on the home page.</p>
      <Card
        title="Featured Item"
        image="https://via.placeholder.com/150"
        description="This is the featured item on our website."
      />
      
      
      
    </div>
  );
};

export default Home;
