import React, { useEffect, useState } from "react";
import "./FurniturePage.css"; // Import the external CSS file
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, setQuantity } from "../redux/counter/quantitiesSlice";
import { addToCart } from "../redux/counter/cardSlice"; // Import addToCart action

const FurniturePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const quantities = useSelector((state) => state.quantities); // Get quantities from Redux store
  const dispatch = useDispatch(); // Redux dispatch to trigger actions

  // Fetch furniture products using async/await
  useEffect(() => {
    const fetchFurniture = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/category/furniture");
        const data = await res.json();

        setProducts(data.products || []); // Set products state with the fetched products

        // Initialize quantities in Redux store for each product
        data.products.forEach((product) => {
          dispatch(setQuantity({ id: product.id, quantity: 1 }));
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch operation
      }
    };

    fetchFurniture(); // Call the async fetch function
  }, [dispatch]);

  // Add product to the cart
  const handleAddToCart = (product, quantity) => {
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

  // Display loading message if data is still being fetched
  if (loading) return <p>Loading...</p>;

  // Display message if no products are found
  if (!products || products.length === 0) return <p>No products found.</p>;

  return (
    <div className="container furniture">
      <h1 className="text-center mb-4" id= "h1-furniture">Furniture Products</h1>

      {/* Display products in a responsive grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card furniture h-100">
              {/* Product image with styling */}
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text small text-muted">{product.description}</p>
                <p className={product.stock > 0 ? "text-success" : "text-danger"}>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>

                {/* Quantity controls */}
                <div className="quantity-controls d-flex align-items-center">
                  <span>Quantity</span>
                  <button
                    onClick={() => dispatch(decrementQuantity({ id: product.id }))}
                    className="btn btn-sm btn-outline-secondary me-2"
                  >
                    -
                  </button>
                  <span>{quantities[product.id] || 1}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity({ id: product.id }))}
                    className="btn btn-sm btn-outline-secondary ms-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">Rating: {product.rating || "N/A"} ⭐</small>
                <button id="buy-button" className="btn btn-primary btn-sm">
                  Buy Now
                </button>
                <button
                  id="addtocart-product"
                  className="btn btn-primary btn-sm"
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

export default FurniturePage;
