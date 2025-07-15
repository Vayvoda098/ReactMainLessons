import React, { Component } from "react";
import { Table } from "reactstrap";
export default class productList extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.info.title} - {this.props.currentCategory}
        </h1>
        <div >
          <Table responsive borderless hover dark style={{width: "500px",cursor:"pointer"}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>stock</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
