import React, { Component } from "react";
import alertify from "alertifyjs";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  onChangeHandler = (event) => {
    //this.setState({ username: event.target.value });
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.notify(this.state.email + " added to db!", "success", 2);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <div></div>
            <Input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.onChangeHandler}></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <div></div>
            <Input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.onChangeHandler}></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <div></div>
            <Input type="textarea" name="description" id="description" placeholder="Enter Description" onChange={this.onChangeHandler}></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" id="city" onChange={this.onChangeHandler}>
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Antalya</option>
              <option>Adana</option>
            </Input>
          </FormGroup>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    );
  }
}
