import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Footer.css';


function Footer() {
  return (
    <footer>
      <div className="container text-center">

        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://github.com/serendipity77705" target="_blank" id="github">Check out my GitHub</a>

          <a href="https://www.linkedin.com/in/malk-daboor/" target="_blank" id="linkedin">Connect with me on LinkedIn</a>

          <a href="mailto:malk.daboor@dal.ca" id="email">Send me an Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;