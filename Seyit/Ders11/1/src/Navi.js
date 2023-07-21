import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import CardSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">reactstrap</NavbarBrand>

          <Nav className="d-flex flex-row gap-5" navbar>
            <NavItem>
              <Link to="/form">Form Demo 1</Link>
            </NavItem>
            <NavItem>
              <Link to="/form2">Form Demo 2</Link>
            </NavItem>
            <CardSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
