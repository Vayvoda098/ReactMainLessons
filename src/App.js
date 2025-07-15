import Navi from "./Nav.js";
import Product from "./productList.js";
import Category from "./categoriList.js";
import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
  };
  changeCategory = (category) => {
    /*değerini yeniden kurma  */
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id)
  };

  componentDidMount = () => {
    //Component yerleştirdiğinde çalıştırması için bir fonkisyon
    this.getProducts();
  };
  getProducts = (categoryId) => {
    let url="http://localhost:3000/products";
    if (categoryId) {
      url+="?categoryId="+categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <Category
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo}
            />
          </Col>
          <Col xs="9">
            <Product
              products={this.state.products}
              currentCategory={this.state.currentCategory}
              info={productInfo}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
