import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/About.css';

export default function About() {
  return (
    <div className="about-page container mt-4">
      <h1 className="mb-4">About Me</h1>

      <div className="mb-5 mt-2">
        <h3>Education</h3>
        <p>
          I am currently a 3rd year Bachelor of Computer Science student at Dalhousie University, where I am expanding my skills
          in artificial intelligence, software and web development, and cybersecurity. 
          I am in the process of obtaining Dalhousie's cybersecurity certificate to grant me an edge in the job market,
          as I would love to work and do research in the cybersecurity field. 
        </p>
      </div>

      <div className="mb-5 mt-2">
        <h3>Experience</h3>
        <p>
          I just finished my first co-op in the summer of 2025 with a local company called InterTalk Critical Communications Systems. 
          My role was as a Machine Learning Research Assistant, and some of my responsibilities included researching and implementing 
          included researching machine learning libraries and models for atomatic speech recognition (ASR) and audio transcription
          to be used in their dispatch consoles. I also started creating my own machine learning model for speech emotion recognition (SER) 
          which was very interesting to me to learn about, as machine learning and AI were new things that I was interested in and wanted to 
          explore in a co-op. 
        </p>
      </div>

      <div className="mb-5 mt-2">
        <h3>Career Goals</h3>
        <p>
          I'm not sure yet what I will be intesrsted in, however I am using my co-ops as a way to learn and develop as many skills as I can. 
          I am planning on investigating different fields in computer science, particularly cybersecurity, AI and Machine Learning, and software development to see what I enjoy the most.
        </p>
      </div>

      <div className="mb-5 mt-2">
        <h3>Technical Skills</h3>
          <p><strong>Programming Languages:</strong> Python, Java, JavaScript, ypeScript, C#, C, HTML</p>
          <p><strong>Web Development:</strong> React, Vue, Flask, CSS/SCSS, Bootstrap, TailWind</p>
          <p><strong>Tools & Software:</strong> Git, GitHub, VS Code, Docker, Jupyter Notebook, Google Colab</p>
          <p><strong>Machine Learning & AI:</strong> Whisper, WhisperX, SpeechBrain, Vosk, Scikit-learn, TensorFlow</p>
      </div>
    </div>
  );
}
