import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      price: 0,
      img: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <input name="img" value={this.state.img} onChange={this.handleChange} />
        <button
          onClick={() => {
            this.props.addProducts(this.state);
            this.setState({
              name: "",
              description: "",
              price: 0,
              img: "",
            });
          }}
        >
          Add Product
        </button>
      </div>
    );
  }
}

export default Form;
