import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Houseplants Haven</h1>
        <p>
          Welcome to Houseplants Haven, your one-stop shop for beautiful
          houseplants!
        </p>
        <p>
          We offer a wide variety of houseplants to brighten up your home or
          office. Our plants are carefully selected to ensure they are of the
          highest quality. Start your journey to a greener living space with us
          today!
        </p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
