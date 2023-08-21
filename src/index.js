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

function Pizza({ prop }) {
  return (
    <>
      <h3>{prop.name}</h3>
      <p>{prop.ingredients}</p>
      <img alt={prop.name} src={prop.imageURL} height={120} />
    </>
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
      <Pizza prop={pizzaData[0]} />
      <Pizza prop={pizzaData[1]} />
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
