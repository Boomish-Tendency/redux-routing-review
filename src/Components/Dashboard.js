import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";
import Form from "./Form";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios
      .get("/api/products")
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => console.log(err));
  };

  addProducts = ({ name, description, price, img }) => {
    axios
      .post("/api/products", { name, description, price, img })
      .then(() => {
        this.getProducts();
      })
      .catch((err) => console.log(err));
  };

  editProducts = (name, description, price, img, id) => {
    axios
      .put(`/api/products/${id}`, { name, description, price, img })
      .then(() => {
        this.getProducts();
      })
      .catch((err) => console.log(err));
  };

  deleteProducts = (id) => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        this.getProducts();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const mappedProducts = this.state.products.map((element, index) => (
      <Product key={`${index}:${element.product_id}`} product={element} />
    ));

    return (
      <main className="dash">
        <Form addProducts={this.addProducts} />
        <div className="product-list">{mappedProducts}</div>
      </main>
    );
  }
}

export default Dashboard;
