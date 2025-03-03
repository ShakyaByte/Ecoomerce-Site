import React from "react";
import './styles/Herosection.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="hero bg-primary text-dark d-flex justify-content-center" >
      <div className="text-center">
          <h2 id="hero-h1">Shopping And Department Store</h2>
          <p className="lead mb-2">
            Shopping is a bit of a relaxing hobby for me, which is <br></br>sometimes troubling for the bank balance.
          </p>
          <Link to= "/register"> <button className="btn-login">Login/Signup</button> </Link>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
