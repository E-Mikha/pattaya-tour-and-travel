import React from "react";

export default function Header() {
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
      </div>
      <div className="presentation"></div>
    </header>
  );
}
