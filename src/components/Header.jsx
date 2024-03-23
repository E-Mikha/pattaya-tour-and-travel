import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
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

        {cartOpen && <div className="shop-cart"></div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
