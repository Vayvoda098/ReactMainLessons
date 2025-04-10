import Navi from './Nav.js';
import Product from './productList.js';
import Catergory from './categoriList.js';
import React, { Component } from 'react'
import { Row, Container, Col } from 'reactstrap';



export default class App extends Component {
  state = {
    currentCatergory: ""
  }
  changeCatergory = catergory => {
    /*değerini yeniden kurma  */
    this.setState({ currentCatergory: catergory.catergoryName });
  };

  render() {
    let productInfo = { title: "Product List", helloWorld: "Hello World!" }
    let catergoryInfo = { title: "Catergory List" }


    return (

      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <Catergory currentCatergory={this.state.currentCatergory} changeCatergory={this.changeCatergory} info={catergoryInfo} />

          </Col>
          <Col xs="3">
            <Product  currentCatergory={this.state.currentCatergory} info={productInfo} />
          </Col>
        </Row>

      </Container>
    );


  }

}


