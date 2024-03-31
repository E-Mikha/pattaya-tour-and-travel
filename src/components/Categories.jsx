import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "Однодневные экскурсии",
          name: "Однодневные экскурсии",
        },
        {
          key: "Морские экскурсии",
          name: "Морские экскурсии",
        },
        {
          key: "Двухдневные экскурсии",
          name: "Двухдневные экскурсии",
        },
        {
          key: "Зоопарки, атракционны и шоу",
          name: "Зоопарки, атракционны и шоу",
        },
        {
          key: "Трансферы и такси",
          name: "Трансферы и такси",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
