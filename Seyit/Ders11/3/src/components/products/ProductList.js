import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.notify(product.title + " added to cart", "success", 2);
  };

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">{this.props.currentCategory.categoryName}</Badge>
          <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}$</td>
                <td>%{product.discountPercentage}</td>
                <td>{product.stock}</td>
                <td>
                  <Button color="success" onClick={() => this.addToCart(product)}>
                    +
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

function mapStatetoProps(state) {
  return { currentCategory: state.changeCategoryReducer, products: state.productListReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductList);
