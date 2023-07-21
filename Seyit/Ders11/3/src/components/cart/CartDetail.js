import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";

class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.notify(product.title + " removed from cart", "error", 2);
  }

  render() {
    return (
      <div>
        {" "}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantitiy</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.title}</td>
                <td>{cartItem.product.price}$</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button color="danger" onClick={() => this.removeFromCart(cartItem.product)}>
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
