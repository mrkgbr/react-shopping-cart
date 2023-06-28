import { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [item, setItem] = useState({
    id: props.id,
    color: props.color,
    count: 0,
  });

  const handleChange = (e) => {
    setItem({ ...item, count: e.target.value });
  };

  return (
    <div key={props.id} className="Card">
      <div className="logo" style={{ backgroundColor: props.color }}></div>
      <div className="title">{props.color}</div>
      <input type="number" min={0} placeholder="0" onClick={handleChange} />
      <button
        type="button"
        onClick={() => props.setCartCounter(item)}
        className="cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
