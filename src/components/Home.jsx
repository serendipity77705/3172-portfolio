import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import '../style/Home.css';


function Home() {
  return (
    <div className="py-5 text-center">
      <h1 className="display-3 fw-bold mb-4">Welcome to My Portfolio</h1>
      <p className="lead mb-4">
        Hi, I'm Malk, a 3rd year computer science student at Dalhousie University! I am a passionate developer creating modern web applications, AI peojects, and investigating cybersecurity threats.
      </p>
      <p className="lead mb-4">
        Some of my previous experience with interships and co-ops included web development, machine learning and AI, data analysis, and in the winter
        I will be working on bioinformatics!
      </p>
      <p className="lead mb-4">
        I'm excited to share my projects and experiences with you. Feel free to explore my portfolio and get in touch!
      </p>

      <div className="pages">
        <Link to='/about'>
          <Button className="button">Read more about me</Button>
        </Link>
        <Link to="/projects">
          <Button className="button">Check out my projects</Button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
