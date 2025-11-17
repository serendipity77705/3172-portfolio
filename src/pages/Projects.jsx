import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Projects.css';

export default function Projects() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Projects</h1>
      <p className="text-center mb-5">
        Over the years I have worked on many hackathon and person projects, and each one taught me something different that I am very proud of. 
        Below are a few of my favorite projects that I have worked on!
      </p>

      {/* Project 1: Sheep Sheep */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3 className="card-title">Sleep Sheep</h3>
          <p><strong>Technologies:</strong> C#, Unity</p>
          <p><a href="https://github.com/serendipity77705/sleep_sheep" target="_blank" className="me-3">GitHub</a></p>
          <p><a href="https://shaunramsay.itch.io/sleeping-sheep" target="_blank" className="me-3">Website</a></p>

          <ul className="bullets">
            <li>Participated in a ShiftKey Labs course to learn about Game Development and how to use Unity, and earned the corresponding Game Development Certificate.</li>
            <li>Worked in a team of 5 and learned how to use Unity and GitHub for collaborative purposes, and presented our game in front of mentors and participants at the end of the course.</li>
          </ul>
        </div>
      </div>

      {/* Project 2: MyTurn */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3 className="card-title">MyTurn</h3>
          <p><strong>Technologies:</strong> Python, React.js, WhisperX</p>
          <p><a href="https://github.com/niaxidos/MyTurn/tree/main" target="_blank" className="me-3">GitHub</a></p>
          <ul className="bullets">
            <li>Collaborated in a team of five at Dalhousie’s first female-only hackathon to develop a tool addressing gender bias in workplace communication.</li>
            <li>Built MyTurn, a web-based application that analyzes meeting audio recordings to quantify and compare speaking time between male and female participants that enables managers to visualize communication dynamics and identify potential gender-based speaking imbalances in meetings.</li>
            <li>Integrated WhisperX for accurate speaker diarization, and used React.js for a responsive front-end dashboard.</li>
          </ul>
        </div>
      </div>

      {/* Project 3: Youniverse Orrery */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3 className="card-title">MyTurn</h3>
          <p><strong>Technologies:</strong> React, JavaScript, SCSS, Node.js, Express.js, Horizons API</p>
          <p><a href="https://github.com/ElliotGBA/spaceapps2024" target="_blank" className="me-3">GitHub</a></p>
          <p><a href="https://youniverse2024.netlify.app/Home" target="_blank" className="me-3">Website</a></p>

          <ul className="bullets">
            <li>Secured first place in NASA’s 2024 Space Apps Challenge by collaborating in a team to create a web solar system simulator that makes learning about the dynamics of space fun and educational.</li>
            <li>Developed real-time planetary motion, time stepping functions and manipulations of planetary mass and velocity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}