import React, { Component } from "react";
import { withRouter } from "react-router";

/* Components */
import Title from "../../../../util/title/Title";
import Link from "../../../../consts/link/Link";
import Button from "../../../../util/button/Button";
import CartRequest from "../../../../requests/CartRequest";

class SCartDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  async createCart() {
    let response = await CartRequest.insert(this.props.cart);
    if(response.isOk()) {
      console.log(response);
    }
  }

  ProductList() {
    return (
      <div className="collection with-header">
        <div className="collection-header"><h4>Productos</h4></div>
        {this.props.cart.purchases.map(product =>
          <p className="collection-item avatar" key={product.id}>
            <img src={product.imgs[0].url} alt="" className="circle" />
            <p className="title">{product.name}</p><br />
            <p>{product.currency}{product.price}</p>
          </p>)
        }
      </div>
    );
  }

  total() {
    let count = {};
    this.props.cart.purchases.forEach(product => {
      if (!count[product.currency])
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
    console.log(this.props.cart);
    return (
      <div className="s-container s-login">
        <Title label={"Detalle"} />
        {this.ProductList()}
        {Object.keys(this.total()).map(currency => <p className="flow-text">Total: {currency}{this.total()[currency]}</p>)}
        <Button label={Link.CARTBACK(this)}       action={() => { }}                        color={this.props.style.secondary} />
        <Button label={"Finalizar"}               action={() => this.createCart.bind(this)} color={this.props.style.secondary} />
      </div>
    );
  }
}

export default withRouter(SCartDetail);
