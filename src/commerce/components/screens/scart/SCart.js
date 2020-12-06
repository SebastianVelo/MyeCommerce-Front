import React, { Component } from "react";
import { withRouter } from "react-router";

/* Components */
import Title from "../../../../util/title/Title";
import CardGrid from "../../util/cardgrid/CardGrid";
import Link from "../../../../consts/link/Link";

class SCart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  

  render() {
    if (this.props.products.length === 0) {
      return (
        <div className="s-container">
          <Title label={"Mi Carrito"} />
          <b>No hay productos en tu carrito. {Link.CONTINUE(this)}</b>
        </div>
      );
    }
    return (
      <div className="s-container">
        <Title label={"Mi Carrito"} />
        <CardGrid products={this.props.products} action={this.props.removeToCart} add={false} />
      </div>
    );
  }
}

export default withRouter(SCart);
