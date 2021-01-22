import React, { Component } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

/* Consts */
import Link from "../../../../consts/link/Link";
import PathLink from "../../../../consts/path/PathLink";
/* Requests */
import CartRequest from "../../../../requests/CartRequest";
/* DTO */
import CartDTO from "../../../../dto/CartDTO";
/* Components */
import Title from "../../../../util/title/Title";
import Button from "../../../../util/button/Button";
import Info from "../../../../util/info/Info";

class SCartDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartDTO: new CartDTO(this.props.cart)
    }
  }

  async createCart() {
    let response = await CartRequest.insert(this.state.cartDTO);
    if (response.isOk()) {
      this.setState({cartDTO: response.data});
      this.props.emptyCart();
    }
  }

  PurchaseList() {
    return (
      <div className="collection with-header">
        {this.state.cartDTO.purchases.map(purchase =>
          <div className="collection-item avatar" key={this.getProduct(purchase.idProduct).hashId}>
            <img src={this.getProduct(purchase.idProduct).imgs[0].url} alt="" className="circle" />
            <h5><b>{this.getProduct(purchase.idProduct).name}</b></h5>
            <h6>{this.getProduct(purchase.idProduct).currency}{purchase.price}</h6>
            <div className="secondary-content">
              <h5 className="black-text">x{purchase.quantity}</h5>
              <h6 className="black-text">{this.getProduct(purchase.idProduct).currency}{purchase.price * purchase.quantity}</h6>
            </div>
          </div>)
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

  getProduct(idProduct) {
    return this.props.cart.purchases.find(product => product.id === idProduct);
  }

  render() {
    if(this.state.cartDTO.id) {
      return <Info style={this.props.style} title="¡Compra realizada!" msg={"Su compra #" + this.state.cartDTO.id + "ha sido realizada"} />
    }
    if (!this.state.cartDTO.id && this.props.cart.purchases.length === 0) {
      return <Redirect to={PathLink.CART(this)} />
    }
    return (
      <div className="s-container s-wrapper">
        <Title label={"Detalle"} />
        {this.PurchaseList()}
        {Object.keys(this.total()).map(currency => <p key={currency} className="flow-text">Total: {currency}{this.total()[currency]}</p>)}
        <Button label={Link.CARTBACK(this)} action={() => { }}                        color={this.props.style.secondary} />
        <Button label={"Finalizar"}         action={() => this.createCart.bind(this)} color={this.props.style.secondary} />
      </div>
    );
  }
}

export default withRouter(SCartDetail);
