import Navi from "./Navi";
import CategoryList from "./CategoryList";
import Productlist from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    let newcart = this.state.cart;
    var addedItem = newcart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newcart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newcart });
    alertify.notify(product.title + " added to cart", "success", 2);
  };

  removeFromCart = (product) => {
    let newcart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newcart });
    alertify.notify(product.title + " removed from cart", "error", 2);
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.category });
    console.log(category);
    this.getProducts(category.category);
  };

  getProducts = (category) => {
    let url = "http://localhost:3000/products";
    if (category) {
      url += "?category=" + category;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List", b: "b" };
    let categoryInfo = { title: "Category List", b: "b" };
    return (
      <div>
        <Container>
          <Row>
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Productlist
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  }
                />
                <Route path="/cart" element={<CartList removeFromCart={this.removeFromCart} cart={this.state.cart} />} />
                <Route path="/form" element={<FormDemo1 />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
