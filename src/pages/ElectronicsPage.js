import React, { useEffect, useState } from "react";
import "./styles/ElectronicPage.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, setQuantity } from "../redux/counter/quantitiesSlice";
import { addToCart } from "../redux/counter/cardSlice"; // Import addToCart action

const ElectronicsPage = () => {
  const [electronics, setElectronics] = useState([]); // State for storing electronic items
  const [loading, setLoading] = useState(true); // State to track loading status

  const quantities = useSelector((state) => state.quantities); // Get quantities from Redux store
  const dispatch = useDispatch(); // Redux dispatch to trigger actions

  // Fetch items and filter electronics using async/await
  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();

        // Filter items related to electronics
        const electronicitems = data.filter(
          (item) =>
            item.category?.name?.toLowerCase() === "electronics" ||
            item.title.toLowerCase().includes("electronic") ||
            item.description.toLowerCase().includes("electronic")
        );

        setElectronics(electronicitems); // Set electronics state with filtered data

        // Initialize quantities in the Redux store
        electronicitems.forEach((item) => {
          dispatch(setQuantity({ id: item.id, quantity: 1 }));
        });
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch operation
      }
    };

    fetchElectronics();
  }, [dispatch]);

  // Add item to the cart
  const handleAddToCart = (item, quantity) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.title,
        price: item.price,
        quantity,
        thumbnail: item.images[0], // Assuming the first image is the item's thumbnail
        description: item.description,
      })
    );
    alert(`${item.title} has been added to the cart!`);
  };

  // Display loading message if data is still being fetched
  if (loading) {
    return <p className="text-center">Loading items...</p>;
  }

  // Display message if no electronics are found
  if (!electronics || electronics.length === 0) {
    return <p>No electronics found.</p>;
  }

  return (
    <div className="container electronics">
      <h1 className="text-center mb-4" id="h1-electronics">Electronics items</h1>

      {/* Displaying items in a responsive grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {electronics.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100">
              {/* item image */}
              <img
                src={item.images[0]}
                className="card-img-electronics"
                alt={item.title}
              />

              {/* item details */}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <p className="card-text small text-muted">{item.description}</p>
                <p className="text-success">Available</p>

                {/* Quantity controls */}
                <div className="quantity-controls d-flex align-items-center">
                  <span>Quantity</span>
                  <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrementQuantity({ id: item.id }))}
                    className="btn btn-sm btn-outline-secondary me-2"
                  >
                    -
                  </button>
                  <span>{quantities[item.id] || 1}</span>
                  <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementQuantity({ id: item.id }))}
                    className="btn btn-sm btn-outline-secondary ms-2"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Card footer with rating and buy button */}
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  Rating: {item.rating?.rate || "N/A"} ⭐
                </small>
                <button id="buy-button" className="btn btn-primary btn-sm">
                  Buy Now
                </button>
                <button
                  id="addtocart-product"
                  className="btn btn-primary btn-sm"
                  onClick={() => handleAddToCart(item, quantities[item.id] || 1)}
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

export default ElectronicsPage;
