import React, { Component } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart ({this.props.cart.length})
        </DropdownToggle>
        <DropdownMenu className="position-absolute end-0" end>
          {this.props.cart.map((cartItem) => (
            <DropdownItem className="d-flex justify-content-between" key={cartItem.product.id}>
              <div>
                {" "}
                <Badge color="warning" className="me-2  align-self-center">
                  {cartItem.quantity}
                </Badge>
                <span className="align-self-start text-start"> {cartItem.product.title}</span>
              </div>

              <Badge onClick={() => this.removeFromCart(cartItem.product)} color="danger" className="ms-4 align-self-center">
                X
              </Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to={"/cart"}>Go to cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.notify(product.title + " removed from cart", "error", 2);
  }

  render() {
    return <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
