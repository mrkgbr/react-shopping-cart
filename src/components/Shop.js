import data from "./data/data.json";
import Card from "./Card";
import "./Shop.css";

const Shop = (props) => {
  return (
    <div className="Shop">
      <h1>Hello from SHOP</h1>
      <ul className="list">
        {data.map((card) => {
          return (
            <li key={card.id}>
              <Card
                id={card.id}
                color={card.color}
                setCartCounter={props.setCartCounter}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shop;
