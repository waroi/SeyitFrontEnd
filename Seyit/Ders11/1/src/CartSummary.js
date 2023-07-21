import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, NavItem, NavLink } from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart ({this.props.cart.length})
        </DropdownToggle>
        <DropdownMenu className="position-absolute" end>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge onClick={() => this.props.removeFromCart(cartItem.product)} color="danger" className="me-3">
                X
              </Badge>
              {cartItem.product.title}
              <Badge color="success" className="mx-2">
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart">Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }

  render() {
    return <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}</div>;
  }
}
