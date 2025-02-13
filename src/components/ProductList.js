import React, { useEffect, useState } from "react";
import "./styles/ProductList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, setQuantity } from "../redux/counter/quantitiesSlice";
import { addToCart } from "../redux/counter/cardSlice"; 



const ProductList = () => {
  const [products, setProducts] = useState([]); // State for storing products
  const [loading, setLoading] = useState(true); // State to track loading status

  const quantities = useSelector((state) => state.quantities); // Get quantities from Redux store
  const dispatch = useDispatch(); // Redux dispatch to trigger actions

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data); // Set products state with fetched data

        // Initialize quantities in Redux store
        data.forEach((product) => {
          dispatch(setQuantity({ id: product.id, quantity: 1 }));
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch operation
      }
    };

    fetchProducts();
  }, [dispatch]);

  // Add item to the cart
  const handleAddToCart = (product, quantity) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity,
        thumbnail: product.image, // Assuming image is the item's thumbnail
        description: product.description,
      })
    );
    alert(`${product.title} has been added to the cart!`);
  };

  // Display loading message if data is still being fetched
  if (loading) {
    return <p className="text-center">Loading items...</p>;
  }

  // Display message if no products are found
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  

  return (
    <>

      <div className="container mt-4" id="product-container">
        <h1 className="text-center mb-2" id="product-h1"> Product List</h1>
        {/* Existing product list grid */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div className="col" key={product.id} id="col-products">
              <div className="card product h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text small text-muted">{product.description}</p>
                </div>
                <div className="quantity-products d-flex align-items-center mt-1 mb-3">
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
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    Rating: {product.rating?.rate || "N/A"} ⭐
                  </small>
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
    </>
  );
};

export default ProductList;
