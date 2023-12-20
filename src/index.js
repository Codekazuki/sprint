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
      <Header />
      <Menu />
      <Footer />
      <Card />
    </div>
  );
}
const Menu = (props) => {
  return (
    <main className='menu'>
      <h2>OUR MENU</h2>
      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

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
function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price - props.pizzaObj.price * 0.2}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className='footer'>
      {isOpen && (
        <div>
          <p>
            We are open until {closedHour}:00 <br /> You may place your order
            now
          </p>
        </div>
      )}
      <button className='btn'>order now</button>
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
