import React from "react";
import "./styles/AboutUs.css";
import bgImage from '../images/about.jpg'

function AboutUs() {

  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "40px 20px",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };


  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Shakya's <span className="span-gold"> Shopcart </span> </h1> 
          <p>Discover the story behind our brand, our mission, and our passion for fashion.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section" style={sectionStyle}>
        <div className="content-container">
        
          <div className="text-container">
            <h2> <span id="h2-white"> Our </span> <span className="span-gold"> Story </span> </h2>
            <p>
              We started with a vision to redefine fashion and make it accessible to everyone.
              Our journey has been one of passion, creativity, and commitment to delivering
              quality and style. From humble beginnings to becoming a well-loved brand, we thank
              our loyal customers for being a part of our story.   Every piece in our collection is crafted with care and a love for fashion. Join
              us as we continue to make waves in the fashion world.
            </p>

            <p> Our mission is to create a platform where everyone can find something they love, no matter their style, size, or budget. We are dedicated to offering the best in quality, affordability, and accessibility. We are committed to ethical sourcing, sustainable practices, and fostering a community of fashion enthusiasts. At Shakya's ShopCart, every product tells a story, and every purchase makes a difference.</p>
            
            <p id="last-para"> We are proud to be more than just a fashion retailer – we’re a community. Our customers inspire us every day, and we strive to give back by supporting causes that matter, from sustainability to local artisans. "As we grow, we’re constantly innovating and finding new ways to connect with our customers. From launching exclusive collections to enhancing your online shopping experience, we are excited to bring you along on our journey. Our designs draw inspiration from global trends, cultural heritage, and our passion for creativity. Every piece is crafted with care, combining timeless elegance with modern style.</p>
            
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why <span className="span-gold"> Choose US </span> </h2>
        <div className="features-container">
          <div className="feature">
            <h3 className="text-italic"> Fast <span className="span-gold"> Delivery </span> </h3>
            <p>Get your orders delivered to your doorstep quickly and efficiently.</p>
          </div>
          <div className="feature" id="secure-feature">
            <h3 className="text-italic">Secure <span className="span-gold"> Payment </span> </h3>
            <p>Shop with confidence using our secure payment system.</p>
          </div>
          <div className="feature">
            <h3 className="text-italic">24/7 <span className="span-gold"> Support </span> </h3>
            <p>Our dedicated team is always here to assist you with your needs.</p>
          </div>
          <div className="feature" id="quality-feature">
            <h3 className="text-italic" >Quality <span className="span-gold"> Products </span> </h3>
            <p>Experience top-notch quality in every product we offer.</p>
          </div>
        </div>
      </section>

      {/*Feature section*/}
      <div className="container-fluid faq-section">
      <h2 className="text-center mb-4"> 
      <span className="span-gold"> Frequently Asked Questions </span>  </h2>
      <div className="faq-item fade-in">
        <h5 className="faq-question">How do I track my order in real-time?</h5>
        <p className="faq-answer">
          Stay updated! Easily track your order status directly on our website with just your order ID.
        </p>
      </div>
      <div className="faq-item fade-in">
        <h5 className="faq-question">What if I don’t love what I ordered? Can I return it?</h5>
        <p className="faq-answer">
          Yes! Enjoy hassle-free returns and exchanges within 30 days of your purchase.
        </p>
      </div>
      <div className="faq-item fade-in">
        <h5 className="faq-question">Are there any exclusive discounts or deals I should know about?</h5>
        <p className="faq-answer">
          Absolutely! Sign up for our newsletter and follow us on social media to snag the hottest deals first.
        </p>
      </div>
      <div className="faq-item fade-in">
        <h5 className="faq-question">Is my payment information secure on your website?</h5>
        <p className="faq-answer">
          100%! We use top-tier encryption and trusted payment gateways to keep your data safe.
        </p>
      </div>
     
    </div>
    </div>
  );
}

export default AboutUs;
