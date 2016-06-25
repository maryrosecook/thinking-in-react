import React from "react";

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <span className="name">{this.props.name}</span>&nbsp;
        <span className="price">${this.props.price}</span>
      </div>
    );
  }
};
