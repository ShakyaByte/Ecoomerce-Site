import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/Shopcategories.css';
import { Link } from "react-router-dom";
import exampleImage from '../images/features3.jpeg';
import secondImage from '../images/features2.jpg';
import thirdImage from '../images/features1.jpg';

const ShopCategories = () => {
  

  return (
    <>
    <div className="container shop py-5 w-100" >
      <h2 className="text-center mb-4" id="shop-h2">Shop Our Top Categories</h2>
      <div className="row  custom-gap 2 w-100 ">
        <div className="cards" style={{ cursor: "pointer" }}>
          <Link to= "/furniture"> 
          <img
            src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
            className="card-img-top"
            alt="Placeholder"
          />
          {/* Overlay H2 Text */}
          <h2
            className="custom">
            Furniture
          </h2>
          </Link>
        </div>

        <div className="cards" style={{ cursor: "pointer" }}>
          <Link to = "/bags">
          <img
            src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"
            className="card-img-top"
            alt="Placeholder"
          />
          {/* Overlay H2 Text */}
          <h2
            className="custom">
            Bag
          </h2>
          </Link>
        </div>

        <div className="cards" id="book-cards">
          <Link to= "/books"> 
          <img style = {{height: "100%"}}
            src="https://thumbs.dreamstime.com/b/stack-vector-cartoon-books-bright-engaging-covers-animated-elements-such-as-bookmarks-glasses-perfect-327462498.jpg"
            className="card-img-top"
            alt="Placeholder"
          />
          {/* Overlay H2 Text */}
          <h2
            className="custom">
                Books
          </h2>
          </Link>
        </div>

        <div className="cards"  style={{ cursor: "pointer" }} id="electronic-cards">
          <Link to= "/electronics"> 
          <img style = {{height: "100%"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBw4YznWO3WSGW59QSnJpGEGj4-T3PusSsQ&s"
            className="card-img-top"
            alt="Placeholder"
          />
          {/* Overlay H2 Text */}
          <h2
            className="custom">
            Electronics
          </h2>
          </Link>
        </div>

        <div className="cards" id="shoes-cards">
        <Link to="/shoes" className="card-link">
          <img style = {{height: "100%"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONyV9bbovTJoyT1QJml5BZ_RMq_MJmKtm8A&s "
            className="card-img-top"
            alt="Placeholder"
          />
          {/* Overlay H2 Text */}
          <h2
            className="custom">
            Shoes
          </h2>
          </Link>
        </div>
        
      </div>
    </div>

     {/* Sliding Picture Section */}
     <span className="d-block text-center mt-5"> <h1 className="dealstext">Hot Items Available Today</h1></span>
     <div id="productCarousel" className="carousel slide mb-5 mt-5" data-bs-ride="carousel">
       <div className="carousel-inner">
         {/* First Slide */}
         <div className="carousel-item active">
           <img
             src={exampleImage}
             className="d-block w-100 custom-image"
             alt="Slide 1"
             style={{ maxHeight: "80vh", width: "100%", objectFit: "cover" }}
           />
         </div>

         {/* Second Slide */}
         <div className="carousel-item">
           <img
             src={secondImage}
             className="d-block w-100 custom-image"
             alt="Slide 2"
             style={{ maxHeight: "80vh", width: "100%", objectFit: "cover" }}
           />
         </div>

         {/* Third Slide */}
         <div className="carousel-item">
           <img
             src={thirdImage}
             className="d-block w-100 custom-image"
             alt="Slide 3"
             style={{ maxHeight: "80vh", width: "100%", objectFit: "cover" }}
           />
         </div>
       </div>

       {/* Carousel controls */}
       <button  
         className="carousel-control-prev"
         type="button"
         data-bs-target="#productCarousel"
         data-bs-slide="prev"
       >
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
       </button>

       <button
         className="carousel-control-next"
         type="button"
         data-bs-target="#productCarousel"
         data-bs-slide="next"
       >
         <span className="carousel-control-next-icon " aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
     </div>

      <div className="container features my-5">
             {/* Features section */}
             <div className="row text-center mx-5 d-flex justify-content-center">
               <div className="col-md-2 custom-col">
                 <i className="fas fa-lock icon-style"></i>
                 <h4 className="mt-3 head">Secure Payments</h4>
                 <span className="features-p">
                   Shop with confidence knowing that your transactions are safeguarded.
                 </span>
               </div>
               <div className="col-md-3 custom-col">
                 <i className="fas fa-truck icon-style"></i>
                 <h4 className="mt-3 head">Free Shipping</h4>
                 <span className="features-p">
                   Shopping with no extra charges savor the liberty of complimentary
                   shipping on every order.
                 </span>
               </div>
               <div className="col-md-3 custom-col">
                 <i className="fas fa-undo-alt icon-style"></i>
                 <h4 className="mt-3 head">Easy Returns</h4>
                 <span className="features-p">
                   With our hassle-free Easy Returns, changing your mind has never been
                   more convenient.
                 </span>
               </div>
               <div className="col-md-3 custom-col">
                 <i className="fas fa-map-marker-alt icon-style"></i>
                 <h4 className="mt-3 head">Order Tracking</h4>
                 <span className="features-p">
                   Stay in the loop with our Order Tracking feature from checkout to
                   your doorstep.
                 </span>
               </div>
             </div>
           </div>
           
      </>
  );
};

export default ShopCategories;
