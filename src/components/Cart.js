import "./Cart.css";

const Cart = (props) => {
  if (props.cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }
  return (
    <div className="Cart">
      <h1>This is your CART</h1>
      <ul className="cart-list">
        {props.cartItems.map((item) => {
          return (
            <li key={item.id}>
              {item.color}
              <div
                style={{ backgroundColor: item.color }}
                className="item-logo"
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
