import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Корзина пуста</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Pattaya Tours and Travel</span>
        <ul className="nav">
          <li>Главная</li>
          <li>Экскурсии</li>
          <li>Такси</li>
          <li>Бесплатные трансферы</li>
          <li>Индивидуальные туры</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
