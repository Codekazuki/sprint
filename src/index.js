import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Card from "./Card";
import Accordion from "./components/accordion/Accordion";

const pizzaData = [
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Accordion />
      {/* <Header />
      <Menu />
      <Footer />
      <Card /> */}
    </div>
  );
}
const Menu = (props) => {
  const pizza = pizzaData;
  const numPizzas = pizza.length;

  return (
    <main className='menu'>
      <h2>OUR MENU</h2>
      {numPizzas > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>Our chef is currently sick sick</p>
      )}

      {/* <Pizza
        photoName='pizzas/funghi.jpg'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        name='Pizza'
        price={30}
      />
      <Pizza
        name='mamarita'
        photoName='pizzas/focaccia.jpg'
        ingredients='semo,and so so and so'
        price={20}
      /> */}
    </main>
  );
};
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className='footer'>
      <div>
        {isOpen ? (
          <p>
            We are open until {closedHour}:00 <br /> You may place your order
            now
          </p>
        ) : (
          <p style={{ backgroundColor: "grey" }}> We are currently closed </p>
        )}
      </div>
      <button className='btn order'>order now</button>
    </footer>
  );
}
function Header() {
  return (
    <header className='header'>
      <h1>Alagbole Pizzas</h1>
    </header>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
