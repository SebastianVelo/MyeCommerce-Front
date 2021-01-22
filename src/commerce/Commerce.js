import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

/* Consts */
import PathRoute from "../consts/path/PathRoute";
/* Request */
import CommerceRequest from "../requests/CommerceRequest";
import CategoryRequest from "../requests/CategoryRequest";
/* Models */
import Entity from "../models/Entity";
import Cart from "../models/Cart";
/* Components */
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
import Footer from "./components/footer/Footer";
import ProgressBar from "../util/progressbar/ProgressBar";
/* Screens */
import SHome from "./components/screens/shome/SHome";
import SLogin from "./components/screens/slogin/SLogin";
import SSingin from "./components/screens/ssingin/SSingin";
import SAccount from "./components/screens/saccount/SAccount";
import SCart from "./components/screens/scart/SCart";
import SCategory from "./components/screens/scategory/SCategory";
import SProduct from "./components/screens/sproduct/SProduct";
import SCartDetail from "./components/screens/scartdetail/SCartDetail";
import FeaturedProducts from "./components/util/featuredproducts/FeaturedProducts";
/* CSS */
import './Commerce.css';
import './components/screens/Screens.css';

class Commerce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProcess: true,
      error: null,
      commerce: null,
      categories: null,
      user: null,
      cart: new Cart(),
    }
  }

  /* Requests */
  async fetchData() {
    let path = this.props.match.params.path;
    await this.setCommerce(path);
    if (this.state.commerce) {
      await this.setCategories();
    }
    this.setState({ inProcess: false });
  }

  async setCommerce(path) {
    let state = this.state;
    let response = await CommerceRequest.getByPath(path);
    if (response.isOk()) {
      state.commerce = new Entity(response.data);
      document.title = state.commerce.name;
      document.body.className = state.commerce.style.background;
    }
    else {
      state.error = response;
      state.inProcess = false;
    }
    this.setState({ state });
  }

  async setCategories() {
    let state = this.state;
    let response = await CategoryRequest.getByCommerce(this.state.commerce.id);
    if (response.isOk()) {
      state.categories = response.data.map(category => new Entity(category));
    }
    else {
      state.error = response;
      state.inProcess = false;
    }
    this.setState({ state });
  }

  /* User */
  login(response) {
    let state = this.state;
    if (response.isOk()) {
      state.user = new Entity(response.data);
      state.cart.setIdUser(state.user.id);
    }
    else {
      state.error = response;
      state.inProcess = false;
    }
    this.setState({ state });
  }

  logoff() {
    let state = this.state;
    state.user = null;
    this.setState({ state });
  }

  /* Cart */
  addToCart(product) {
    let cart = this.state.cart;
    cart.add(product);
    if (!cart.idCommerce)
      cart.setIdCommerce(this.state.commerce.id);
    this.setState({ cart });
  }

  removeToCart(product) {
    let cart = this.state.cart;
    cart.remove(product.hashId);
    this.setState({ cart });
  }

  emptyCart() {
    let cart = this.state.cart;
    cart.empty();
    this.setState({ cart });
  }

  /* React functs */
  async componentDidMount() {
    if (!this.state.commerce) {
      await this.fetchData();
    }
  }

  render() {
    if (this.state.inProcess)
      return <ProgressBar />;
    if (this.state.error)
      return JSON.stringify(this.state.error); //TODO hacer un componente que muestre un error
    return (
      <div>
        <Header style={this.state.commerce.style} commerce={this.state.commerce} />
        <Navbar style={this.state.commerce.style} user={this.state.user} categories={this.state.categories} cart={this.state.cart} />
        <Searchbar style={this.state.commerce.style} />

        <Route exact path={PathRoute.COMMERCE()} component={() => <SHome style={this.state.commerce.style} addToCart={this.addToCart.bind(this)} commerce={this.state.commerce} />} />
        <Route exact path={PathRoute.CATEGORY()} component={() => <SCategory style={this.state.commerce.style} addToCart={this.addToCart.bind(this)} categories={this.state.categories} />} />
        <Route exact path={PathRoute.PRODUCT()} component={() => <SProduct style={this.state.commerce.style} addToCart={this.addToCart.bind(this)} />} />
        <Route exact path={PathRoute.LOGIN()} component={() => <SLogin style={this.state.commerce.style} user={this.state.user} login={this.login.bind(this)} />} />
        <Route exact path={PathRoute.SINGIN()} component={() => <SSingin style={this.state.commerce.style} user={this.state.user} login={this.login.bind(this)} />} />
        <Route exact path={PathRoute.ACCOUNT()} component={() => <SAccount style={this.state.commerce.style} user={this.state.user} logoff={this.logoff.bind(this)} />} />
        <Route exact path={PathRoute.CART()} component={() => <SCart style={this.state.commerce.style} removeToCart={this.removeToCart.bind(this)} cart={this.state.cart} />} />
        <Route exact path={PathRoute.CARTDETAIL()} component={() => <SCartDetail style={this.state.commerce.style} emptyCart={this.emptyCart.bind(this)} cart={this.state.cart} />} />

        <FeaturedProducts carousel={true} style={this.state.commerce.style} addToCart={this.addToCart.bind(this)} commerce={this.state.commerce} />
        <Footer style={this.state.commerce.style} commerce={this.state.commerce} />
      </div>
    );
  }
}

export default withRouter(Commerce);
