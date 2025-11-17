import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/NotFound.css';



export default function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404 — Page Not Found</h1>
      <p className="lead mt-3">
        Oh No! Sorry, but the page you are looking for doesn’t exist. I'll take you back home though!
      </p>

      <Link to="/" className="btn btn-primary mt-3">
            Go Back Home!
      </Link>
    </div>
  );
}
