import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Экскурсии по Бангкоку",
          img: "river-kwai.jpg",
          desc: "Самый насыщенный тур из Паттайи - 2 дня 1 ночь",
          category: "Экскурсии",
          price: "2700/3700",
        },
        {
          id: 2,
          title: "Однодневные туры",
          img: "cambodia.jpg",
          desc: "Экскурсия в Камбоджу Ангор Ват - 2 дня 1 ночь",
          category: "Экскурсии",
          price: "6500/7500",
        },
        {
          id: 3,
          title: "Двухдневные туры",
          img: "emerald-island.jpg",
          desc: "Островной тур в подводный заповедник - 1 день",
          category: "Экскурсии",
          price: "1600/2100",
        },
        {
          id: 4,
          title: "Однодневные острова",
          img: "madagaskar.jpg",
          desc: "Морская прогулка по 3 островам, веселые конкурсы, алкоголь и многое другое - 1 день",
          category: "Экскурсии",
          price: "1300/2200",
        },
        {
          id: 5,
          title: "Двухдневные острова",
          img: "bangkok-evening.jpg",
          desc: "Cовременный и исторический Бангкок, Маханакхон и ужин на лайнере - 1 день",
          category: "Экскурсии",
          price: "2500/3100",
        },
        {
          id: 6,
          title: "Морские прогулки",
          img: "khao-kheo.jpg",
          desc: "Самый большой контактный зоопарк в Паттайе - 1 день",
          category: "Экскурсии",
          price: "650/750",
        },
        {
          id: 7,
          title: "Рыбалка",
          img: "khao-kheo.jpg",
          desc: "Самый большой контактный зоопарк в Паттайе - 1 день",
          category: "Экскурсии",
          price: "650/750",
        },
        {
          id: 8,
          title: "Зоопарки, парки, аквапарки",
          img: "khao-kheo.jpg",
          desc: "Самый большой контактный зоопарк в Паттайе - 1 день",
          category: "Экскурсии",
          price: "650/750",
        },
        {
          id: 9,
          title: "Трансферы на острова",
          img: "khao-kheo.jpg",
          desc: "Самый большой контактный зоопарк в Паттайе - 1 день",
          category: "Экскурсии",
          price: "650/750",
        },
        {
          id: 10,
          title: "Международные туры",
          img: "khao-kheo.jpg",
          desc: "Самый большой контактный зоопарк в Паттайе - 1 день",
          category: "Экскурсии",
          price: "650/750",
        },
        {
          id: 11,
          title: "Такси",
          img: "khao-kheo.jpg",
          desc: "Самый большой контактный зоопарк в Паттайе - 1 день",
          category: "Экскурсии",
          price: "650/750",
        },
        {
          id: 12,
          title: "Бесплатные трансферы",
          img: "khao-kheo.jpg",
          desc: "Самый большой контактный зоопарк в Паттайе - 1 день",
          category: "Экскурсии",
          price: "650/750",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
