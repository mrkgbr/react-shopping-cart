import "./Card.css";

const Card = (props) => {
  const item = [
    {
      id: props.id,
      color: props.color,
    },
  ];
  return (
    <div key={props.id} className="Card">
      <div className="logo" style={{ backgroundColor: props.color }}></div>
      <div className="title">{props.color}</div>
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
