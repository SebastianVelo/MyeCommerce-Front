import React, { Component } from "react";
import { withRouter } from "react-router";

/* Request */
import ProductRequest from "../../../../requests/ProductRequest";
/* Models */
import Entity from "../../../../models/Entity";
/* Components */
import Title from "../../../../util/title/Title";
import ProgressBar from "../../../../util/progressbar/ProgressBar";
import CardGrid from "../cardgrid/CardGrid";
import Carousel from "../../../../util/carousel/Carousel";
import Card from "../cardgrid/card/Card";

class FeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProcess: true,
      error: null,
      products: null
    }
  }

  componentToShow() {
    return this.props.carousel ?
      <Carousel
        elements={this.state.products.map(product => <Card key={product.id} product={product} buttonColor={this.props.style.secondary}
        action={this.props.addToCart}
        add={true} />)}
        cfg={{
          fullWidth: true,
          padding: 20
        }}
        id="featured"
      /> :
      <CardGrid
        products={this.state.products}
        buttonColor={this.props.style.secondary}
        action={this.props.addToCart}
        add={true}
      />
  }

  async fetchData() {
    await this.setProducts();
    this.setState({ inProcess: false });
  }

  async setProducts() {
    let state = this.state;
    let response = await ProductRequest.getShowInHome(this.props.commerce.id);
    if (response.isOk()) {
      state.products = response.data.map(product => new Entity(product));
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
      <div className="s-container ">
        <Title label={"Destacados"} />
        <div className="s-wrapper">
          {this.componentToShow()}
        </div>
      </div>
    );
  }
}

export default withRouter(FeaturedProducts);
