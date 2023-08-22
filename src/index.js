import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    imageURL:
      "https://www.177milkstreet.com/assets/site/Recipes/_large/Tomato-Olive-Focaccia.jpg",
    price: 200,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    imageURL:
      "https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg",
    price: 600,
    soldOut: false,
  },
];

function Pizza(props) {
  return (
    <div className="pizza">
      <img alt={props.name} src={props.imageURL} height={120} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>₹{props.price}</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Reactive Pizzaria Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            imageURL={pizza.imageURL}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently Open</footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
