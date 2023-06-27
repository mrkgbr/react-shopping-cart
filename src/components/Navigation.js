import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <nav className="menu">
        <ul className="navi-list">
          <li>
            <Link to="">HOME</Link>
          </li>
          <li>
            <Link to="shop">SHOP</Link>
          </li>
        </ul>
      </nav>
      <div className="title">PAINT SHOP</div>
      <div className="cart">
        <Link to="cart">CART: {props.cartCounter}</Link>
      </div>
    </div>
  );
};

export default Navigation;
