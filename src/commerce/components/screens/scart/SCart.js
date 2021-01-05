import React, { Component } from "react";
import { withRouter } from "react-router";

/* Components */
import Title from "../../../../util/title/Title";
import CardGrid from "../../util/cardgrid/CardGrid";
import Link from "../../../../consts/link/Link";
import Button from "../../../../util/button/Button";

class SCart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  total() {
    let count = {};
    this.props.cart.purchases.forEach(product => {
      if(!count[product.currency]) 
        count[product.currency] = 0;
      count[product.currency] += product.price;
    });
    return count;
  }

  render() {
    if (this.props.cart.purchases.length === 0) {
      return (
        <div className="s-container s-login">
          <Title label={"Mi carrito"} />
          <b>No hay productos en tu carrito. {Link.CONTINUE(this)}</b>
        </div>
      );
    }
    return (
      <div className="s-container s-login">
        <Title label={"Mi carrito"} />
        <CardGrid products={this.props.cart.purchases} action={this.props.removeToCart} add={false} />
        {Object.keys(this.total()).map(currency => <p className="flow-text">Total: {currency}{this.total()[currency]}</p>)}
        <Button label={Link.CARTDETAIL(this)} action={() => {} } color={this.props.style.secondary} />
      </div>
    );
  }
}

export default withRouter(SCart);
