import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <nav className="menu">
        <ul>
          <li>
            <Link to="">HOME</Link>
          </li>
          <li>
            <Link to="shop">SHOP</Link>
          </li>
        </ul>
      </nav>
      <div className="counter">
        <Link to="cart">CART:</Link> {props.cartCounter}
      </div>
    </div>
  );
};

export default Navigation;
