import React, { useEffect, useMemo } from "react";
import "./styles/BooksPage.css";
import { incrementQuantity, decrementQuantity, setQuantity } from "../redux/counter/quantitiesSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/counter/cardSlice"; // Adjust the path if necessary


const BooksPage = () => {
  const quantities = useSelector((state) => state.quantities); // Get quantities from Redux store
  const dispatch = useDispatch();

  // Hardcoded book data, memoized to prevent unnecessary re-renders
  const products = useMemo(
    () => [
      {
        id: "book-1",
        title: "The Anxious Generation",
        author: "by Jonathan Haidt (Author)",
        description:
          "The Anxious Generation by Jonathan Haidt investigates the rise of youth mental health issues in the smartphone era. With data-driven insights, Haidt explores the impact of social media, tech, and the decline of play-based childhood on teens' well-being.",
        price: 10.99,
        stock: 5,
        rating: 4.5,
        thumbnail: "https://m.media-amazon.com/images/I/81XP4hEXDXL._SY466_.jpg",
      },
      {
        id: "book-2",
        title: "The God of the Woods: A Novel",
        author: "by Liz Moore (Author)",
        description:
          "Early morning, August 1975: a camp counselor discovers an empty bunk. Its occupant, Barbara Van Laar, has gone missing. Barbara is not just any thirteen-year-old: she is the daughter of the family that owns the summer camp and employs most of the region's residents.",
        price: 8.99,
        stock: 10,
        rating: 4.8,
        thumbnail: "https://m.media-amazon.com/images/I/81gHfeKi+9L._SY466_.jpg",
      },
      {
        id: "book-3",
        title: "The Frozen River: A GMA Book Club Pick: A Novel",
        author: "by Ariel Lawhon (Author)",
        description:
          "Set in 1789 Maine, *The Frozen River* by Ariel Lawhon follows midwife Martha Ballard as she investigates a murder entwined with an alleged rape she documented in her diary.",
        price: 12.99,
        stock: 0,
        rating: 4.6,
        thumbnail: "https://m.media-amazon.com/images/I/51f+F+b-0QL._SY445_SX342_.jpg",
      },
      {
        id: "book-4",
        title: "Murdle: Volume 1",
        author: "by G T Karber (Author)",
        description:
          "The first of their kind, these humorous mini-mystery puzzles challenge you to find whodunit, how, where, and why. Examine the clues, interview the witnesses, and use the power of deduction to complete the grid and catch the culprit.",
        price: 7.99,
        stock: 4,
        rating: 4.7,
        thumbnail: "https://m.media-amazon.com/images/I/7198Z7YiOPL._SY466_.jpg",
      },
      {
        id: "book-5",
        title: "The Art of Public Speaking",
        author: "by J.D. Salinger (Author)",
        description:
          "The Art of Public Speaking* by Dale Carnegie is a classic guide to building confidence, overcoming fear, and delivering impactful speeches. Perfect for anyone looking to excel in communication and influence others effectively.",
        price: 11.29,
        stock: 7,
        rating: 4.3,
        thumbnail:
          "https://img.drz.lazcdn.com/static/np/p/ddbf5cd04f78b34b213cceff0cb6984d.jpg_400x400q75.jpg_.webp",
      },
      {
        id: "book-6",
        title: "Self Help",
        author: "by Gabrielle Bernstein (Author)",
        description:
          "In this groundbreaking book, Gabby demystifies the power of Internal Family Systems (IFS) Therapy, taking its life-changing teachings out of the therapist’s office and into your everyday life.",
        price: 9.99,
        stock: 7,
        rating: 4.3,
        thumbnail: "https://m.media-amazon.com/images/I/61WVp4iq69L._SY466_.jpg",
      },
    ],
    []
  );

  useEffect(() => {
    products.forEach((product) => {
      if (!quantities[product.id]) {
        dispatch(setQuantity({ id: product.id, quantity: 1 }));
      }
    });
  }, [dispatch, quantities, products]);

  const handleAddToCart = (product, quantity) => {
    console.log("Dispatching addToCart with product:", product, "quantity:", quantity);
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity,
        thumbnail: product.thumbnail,
        description: product.description,
      })
    );
    alert(`${product.title} has been added to the cart!`);
  };
  



  return (
    <div className="container furniture">
      <h1 className="text-center mb-4" id="books-h1">Books Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 big">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ width: "100%", maxHeight: "320px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.author}</h6>
                <p className="card-text">${product.price}</p>
                <p className="card-text small text-muted">{product.description}</p>
                <p className={product.stock > 0 ? "text-success" : "text-danger"}>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>
                <div className="quantity-controls d-flex align-items-center">
                  <span>Quantity:</span>
                  <button
                    onClick={() => dispatch(decrementQuantity({ id: product.id }))}
                    className="btn btn-sm btn-outline-secondary me-2"
                  >
                    -
                  </button>
                  <span>{quantities[product.id]}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity({ id: product.id }))}
                    className="btn btn-sm btn-outline-secondary ms-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">Rating: {product.rating} ⭐</small>
                <button id="buy-button" className="btn btn-primary btn-sm">
                  Buy Now
                </button>

                <button id="addtocart-product" className="btn btn-primary btn-sm buutonbooks"  onClick={() => handleAddToCart(product, quantities[product.id] || 1)}>
            Add to Cart
          </button>
          
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
