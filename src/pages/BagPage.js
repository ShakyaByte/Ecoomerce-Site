import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  incrementQuantity,
  decrementQuantity,
  setQuantity,
} from "../redux/counter/quantitiesSlice";
import { addToCart } from "../redux/counter/cardSlice";
import "./styles/BagPage.css"

const BagPage = React.memo(() => {
  const quantities = useSelector((state) => state.quantities); // Get quantities from Redux store
  const dispatch = useDispatch();
 

  const bags = useMemo(
    () => [
      {
        id: "bag-1",
        name: "Classic Leather Backpack",
        brand: "by LeatherWorks",
        description:
          "A timeless leather backpack with ample storage and a sleek design, perfect for daily use and travel.",
        price: 49.99,
        stock: 10,
        rating: 4.8,
        thumbnail:
          "https://frankcleggleatherworks.com/media/catalog/product/cache/64dbedf2644cd99faf0087c6dc776338/l/e/leather_drawstring_backpack_cognac_3.jpg",
      },
      {
        id: "bag-2",
        name: "Sporty Gym Duffle",
        brand: "by FitGear",
        description:
          "Lightweight and spacious, this gym duffle bag comes with a dedicated shoe compartment and water-resistant fabric.",
        price: 35.99,
        stock: 7,
        rating: 4.5,
        thumbnail:
          "https://outdoorinoxto.com/cdn/shop/files/2023-08-11_3.25.56_753a7c26-3610-4643-b469-7a6db749d19e.png?v=1701605582&width=2180",
      },
      {
        id: "bag-3",
        name: "Elegant Tote Bag",
        brand: "by Urban Chic",
        description:
          "Stylish and functional, this tote bag is made of premium materials and designed for modern professionals.",
        price: 42.99,
        stock: 0,
        rating: 4.7,
        thumbnail:
          "https://www.vedlyn.com/~img/jt13744_idr_198_000_material_pu_size_l32xh28_5xw14_5cm_weight_900gr_color_black-9fcae-3555_725-twebp80.webp",
      },
      {
        id: "bag-4",
        name: "Hiking Adventure Pack",
        brand: "by TrailBlazer",
        description:
          "Built for the outdoors, this hiking backpack includes hydration compatibility and rugged durability.",
        price: 59.99,
        stock: 4,
        rating: 4.6,
        thumbnail:
          "https://res.cloudinary.com/otg-active/image/upload/c_scale,dpr_auto,q_auto:eco,w_auto/v1/uploads/assets/1169479-BLUE-1-98f9b0e2.jpg",
      },
      {
        id: "bag-5",
        name: "Minimalist Sling Bag",
        brand: "by SimpleCarry",
        description:
          "Compact and lightweight, this sling bag is perfect for quick errands or a casual outing.",
        price: 29.99,
        stock: 5,
        rating: 4.4,
        thumbnail: "https://m.media-amazon.com/images/I/71BEwb6C6oL.jpg",
      },
      {
        id: "bag-6",
        name: "Travel Organizer Bag",
        brand: "by JetSetters",
        description:
          "A versatile travel organizer bag featuring multiple compartments to keep your essentials tidy and accessible on the go.",
        price: 39.99,
        stock: 6,
        rating: 4.5,
        thumbnail: "https://m.media-amazon.com/images/I/81Wtfq5RhhL.jpg",
      },
    ],
    []
  );

  useEffect(() => {
    bags.forEach((bag) => {
      if (!quantities[bag.id]) {
        dispatch(setQuantity({ id: bag.id, quantity: 1 }));
      }
    });
  }, [dispatch, bags, quantities]);

  const handleAddToCart = (bag, quantity) => {
    dispatch(
      addToCart({
        id: bag.id,
        name: bag.name,
        price: bag.price,
        quantity,
        thumbnail: bag.thumbnail,
        description: bag.description,
      })
    );
    alert(`${bag.name} has been added to the cart!`);
  };

  return (
    <div className="container bags">
      <h1 className="text-center mb-4" id="bag-h1">Bag Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 big">
        {bags.map((bag) => (
          <BagCard
            key={bag.id}
            bag={bag}
            quantity={quantities[bag.id] || 1}
            onIncrement={() => dispatch(incrementQuantity({ id: bag.id }))}
            onDecrement={() => dispatch(decrementQuantity({ id: bag.id }))}
            onAddToCart={() => handleAddToCart(bag, quantities[bag.id] || 1)}
          />
        ))}
      </div>
    </div>
  );
});

const BagCard = React.memo(({ bag, quantity, onIncrement, onDecrement, onAddToCart }) => {
  return (
    <div className="col">
      <div className="card bag h-100">
        <img
          src={bag.thumbnail}
          className="card-img-top"
          alt={bag.name}
          style={{ width: "100%", maxHeight: "320px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{bag.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{bag.brand}</h6>
          <p className="card-text">${bag.price}</p>
          <p className="card-text small text-muted">{bag.description}</p>
          <p className={bag.stock > 0 ? "text-success" : "text-danger"}>
            {bag.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <div className="quantity-controls d-flex align-items-center">
            <span>Quantity:</span>
            <button
              onClick={onDecrement}
              className="btn btn-sm btn-outline-secondary me-2"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={onIncrement}
              className="btn btn-sm btn-outline-secondary ms-2"
            >
              +
            </button>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">Rating: {bag.rating} ⭐</small> 
          <button id="buy-button" className="btn btn-primary btn-sm">
            Buy Now
          </button>

            <button id="addtocart-product" className="btn btn-primary btn-sm" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

export default BagPage;
