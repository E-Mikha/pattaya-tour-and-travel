import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Река Квай + Тайский Экспресс",
          img: "river-kwai.jpg",
          desc: "Самый насыщенный тур из Паттайи - 2 дня 1 ночь",
          category: "Экскурсии",
          price: "2700/3700",
        },
        {
          id: 2,
          title: "Камбоджа Великий Ангкор Ват",
          img: "cambodia.jpg",
          desc: "Экскурсия в Камбоджу Ангор Ват - 2 дня 1 ночь",
          category: "Экскурсии",
          price: "6500/7500",
        },
        {
          id: 3,
          title: "Изумрудный Остров",
          img: "emerald-island.jpg",
          desc: "Островной тур в подводный заповедник - 1 день",
          category: "Экскурсии",
          price: "1600/2100",
        },
        {
          id: 4,
          title: "Мадагаскар Экспресс",
          img: "madagaskar.jpg",
          desc: "Морская прогулка по 3 островам, веселые конкурсы, алкоголь и многое другое - 1 день",
          category: "Экскурсии",
          price: "1300/2200",
        },
        {
          id: 5,
          title: "Вечерний Бангкок",
          img: "bangkok-evening.jpg",
          desc: "Cовременный и исторический Бангкок, Маханакхон и ужин на лайнере - 1 день",
          category: "Экскурсии",
          price: "2500/3100",
        },
        {
          id: 6,
          title: "Зоопарк Кхао Кхео",
          img: "khao-kheo.jpg",
          desc: "Самый большой контактный зоопарк в Паттайе - 1 день",
          category: "Экскурсии",
          price: "650/750",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
