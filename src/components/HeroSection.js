import React from "react";
import './styles/Herosection.css';

const HeroSection = () => {
  return (
    <>
      <section className="hero bg-primary text-dark d-flex justify-content-center" >
      <div className="text-center">
          <h2 id="hero-h1">Shopping And Department Store</h2>
          <p className="lead mb-2">
            Shopping is a bit of a relaxing hobby for me, which is <br></br>sometimes troubling for the bank balance.
          </p>
          <button className="btn-login">Login/Signup</button>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
