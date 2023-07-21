import React, { Component } from "react";
import { Table, Badge } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>
                <Badge onClick={() => this.props.removeFromCart(cartItem.product)} color="danger" className="me-3">
                  X
                </Badge>
              </td>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.title}</td>
              <td>{cartItem.product.price}</td>
              <td>{cartItem.product.stock}</td>
              <td>{cartItem.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
