import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Экскурсии по Бангкоку",
          img: "river-kwai.jpg",
          desc: "Однодневные экскурсии в Бангкок с русским гидом",
          category: "Однодневные экскурсии",
          price: "2700/3700",
        },
        {
          id: 2,
          title: "Популярные однодневные туры",
          img: "cambodia.jpg",
          desc: "Ежедневные экскурсии по Паттайе с русским гидом",
          category: "Однодневные экскурсии",
          price: "6500/7500",
        },
        {
          id: 3,
          title: "Авторские экскурсии",
          img: "cambodia.jpg",
          desc: "Австорские экскурсии по разным провинциям Таиланда",
          category: "Однодневные экскурсии",
          price: "6500/7500",
        },
        {
          id: 4,
          title: "Однодневные острова",
          img: "madagaskar.jpg",
          desc: "Однодневные экскурсии на дальние и ближние острова",
          category: "Морские экскурсии",
          price: "1300/2200",
        },

        {
          id: 5,
          title: "Морские прогулки",
          img: "khao-kheo.jpg",
          desc: "Морские прогулки по островам с развлекательной программой",
          category: "Морские экскурсии",
          price: "650/750",
        },
        {
          id: 6,
          title: "Рыбалка",
          img: "khao-kheo.jpg",
          desc: "Рыбалка в Тайланде, морская и озерная",
          category: "Морские экскурсии",
          price: "650/750",
        },
        {
          id: 7,
          title: "Двухдневные острова",
          img: "bangkok-evening.jpg",
          desc: "Экскурсии на острова с ночевкой на два и более дня",
          category: "Двухдневные экскурсии",
          price: "2500/3100",
        },
        {
          id: 8,
          title: "Двухдневные туры",
          img: "emerald-island.jpg",
          desc: "Наземные двухдневные туры по Таиланду и близлижайщим странам",
          category: "Двухдневные экскурсии",
          price: "1600/2100",
        },
        {
          id: 9,
          title: "Международные туры",
          img: "khao-kheo.jpg",
          desc: "Туры с авиаперелетом в соседние страны и дальние провинции Таиланда",
          category: "Двухдневные экскурсии",
          price: "650/750",
        },

        {
          id: 10,
          title: "Экстрим",
          img: "khao-kheo.jpg",
          desc: "Экстримальные экскурсии в Паттайе",
          category: "Зоопарки, атракционны и шоу",
          price: "650/750",
        },
        {
          id: 11,
          title: "Зоопарки, парки, аквапарки",
          img: "khao-kheo.jpg",
          desc: "Экскурсии в зоопарки и парки Паттайи и Бангкока",
          category: "Зоопарки, атракционны и шоу",
          price: "650/750",
        },
        {
          id: 12,
          title: "Вечерние шоу",
          img: "khao-kheo.jpg",
          desc: "Шоу трансвеститов и шоу для взрослых",
          category: "Зоопарки, атракционны и шоу",
          price: "650/750",
        },

        {
          id: 13,
          title: "Трансферы на острова",
          img: "khao-kheo.jpg",
          desc: "Трансферы на острова",
          category: "Трансферы и такси",
          price: "650/750",
        },
        {
          id: 14,
          title: "Такси",
          img: "khao-kheo.jpg",
          desc: "Такси в аэропорт",
          category: "Трансферы и такси",
          price: "650Такси/750",
        },
        {
          id: 15,
          title: "Бесплатные трансферы",
          img: "khao-kheo.jpg",
          desc: "Бесплатные трансферы во все знаменитые фабрики и магазины Паттайи",
          category: "Трансферы и такси",
          price: "650/750",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
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
