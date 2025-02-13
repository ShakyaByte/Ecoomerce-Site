import React, { useEffect, useState } from "react";
import "./styles/ElectronicPage.css"; 
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, setQuantity } from '../redux/counter/quantitiesSlice';
import { addToCart } from "../redux/counter/cardSlice"; // Import addToCart action

const ShoesPage = () => {
  const [shoes, setShoes] = useState([]); // State for storing shoes products
  const [loading, setLoading] = useState(true); // State to track loading status
  const quantities = useSelector((state) => state.quantities); // Get quantities from Redux store
  const dispatch = useDispatch(); // Redux dispatch to trigger actions

  // Fetch shoes products using async/await
  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=12");
        const data = await res.json();
        
        // Filter products related to shoes
        const shoesProducts = data.filter((product) => 
          product.category?.name?.toLowerCase() === "shoes" ||
          product.title.toLowerCase().includes("shoe") ||
          product.description.toLowerCase().includes("shoe")
        );
        
        setShoes(shoesProducts); // Set shoes state with filtered products

        // Initialize quantities in Redux store for each product
        shoesProducts.forEach((product) => {
          dispatch(setQuantity({ id: product.id, quantity: 1 }));
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch operation
      }
    };

    fetchShoes(); // Call the async fetch function
  }, [dispatch]);

  // Display loading message if data is still being fetched
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Display message if no shoes products are found
  if (!shoes || shoes.length === 0) {
    return <p>No Shoes Products found.</p>;
  }


  const handleAddToCart = (product, quantity) => {  // Change 'item' to 'product'
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity,
        thumbnail: product.images[0], // Assuming the first image is the item's thumbnail
        description: product.description,
      })
    );
    alert(`${product.title} has been added to the cart!`);
  };

  return (
    <div className="container shoes mt-4">
      <h1 className="text-center mb-4" id="shoe-h1">Shoes Products</h1>

      {/* Display products in a responsive grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {shoes.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              {/* Product image with styling */}
              <img
                src={product.images[0]}
                className="card-img-shoes"
                alt={product.title}
                style={{ borderRadius: "7px", height: "50vh" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text small text-muted">{product.description}</p>
                <p className="text-success">Available</p>

                {/* Quantity controls */}
                <div className="quantity-controls d-flex align-items-center">
                  <span>Quantity</span>
                  <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrementQuantity({ id: product.id }))}
                    className="btn btn-sm btn-outline-secondary me-2"
                  >
                    -
                  </button>
                  <span>{quantities[product.id] || 1}</span>
                  <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementQuantity({ id: product.id }))}
                    className="btn btn-sm btn-outline-secondary ms-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  Rating: {product.rating?.rate || "N/A"} ⭐
                </small>
                <button id="buy-button" className="btn btn-primary btn-sm">
                  Buy Now
                </button>
                <button
                  id="addtocart-product"
                  className="btn btn-primary btn-sm button-shoe"
                  onClick={() => handleAddToCart(product, quantities[product.id] || 1)}
                >
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

export default ShoesPage;
