import React, { Component } from "react";
import { withRouter } from "react-router";

/* Request */
import ProductRequest from "../../../../requests/ProductRequest";
/* Models */
import Entity from "../../../../models/Entity";
/* Components */
import ProgressBar from "../../../../util/progressbar/ProgressBar";
import Title from "../../../../util/title/Title";
import Carousel from "../../../../util/carousel/Carousel";
import Button from "../../../../util/button/Button";

class SProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProcess: true,
      error: null,
      product: null
    }
  }

  addToCart() {
    this.props.addToCart(this.state.product);
  }

  async fetchData() {
    let id = this.props.match.params.id;
    await this.setProduct(id);
    this.setState({ inProcess: false });
  }

  async setProduct(id) {
    let state = this.state;
    let response = await ProductRequest.getById(id);
    if (response.isOk()) {
      state.product = new Entity(response.data);
    }
    else {
      state.error = response;
      state.inProcess = false;
    }
    this.setState({ state });
  }

  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    if (this.state.inProcess)
      return <ProgressBar />;
    if (this.state.error)
      return JSON.stringify(this.state.error); //TODO hacer un componente que muestre un error
    return (
      <div className="s-container s-product hoverable">
        <div className="row">
          <div className="col s12 l8">
            <Title label={this.state.product.name} />
            <div className="divider"></div>
            <center>
              <Carousel elements={this.state.product.imgs.map(img => <img className="materialboxed" src={img.url} alt={this.state.product.name} />)} cfg={{}} id="sproduct"  />
            </center>
          </div>
          <div className="col s12 l4">
            <Button label="Añadir al carrito" action={() => this.addToCart.bind(this)} color={this.props.style.secondary} disabled={this.state.product.stock === 0} />
            <p className="product-price">{this.state.product.currency}{this.state.product.price}</p>
            <div className="divider"></div>
            <p>Stock: {this.state.product.stock}</p>
            <p>{this.state.product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SProduct);