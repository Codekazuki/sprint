import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Card from "./Card";

const pizzaData = [
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
      {/* <Header />
      <Menu />
      <Footer /> */}
      <Card />
    </div>
  );
}
const Menu = (props) => {
  return (
    <main className='menu'>
      <h2>OUR MENU</h2>
      <Pizza
        imageName='pizzas/funghi.jpg'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        name='Pizza'
        price={30}
      />
      <Pizza
        name='mamarita'
        imageName='pizzas/focaccia.jpg'
        ingredients='semo,and so so and so'
        price={20}
      />
    </main>
  );
};
function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.imageName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price - props.price * 0.2}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className='footer'>
      <h1>
        Today is {new Date().toLocaleDateString()}, and the time is
        {new Date().toLocaleTimeString()} This is the footer
      </h1>
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
