import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

/* Consts */
import PathRoute from "../consts/path/PathRoute";
/* Request */
import CommerceRequest from "../requests/CommerceRequest";
import CommerceStyleRequest from "../requests/CommerceStyleRequest";
import CategoryRequest from "../requests/CategoryRequest";
/* Models */
import Entity from "../models/Entity";
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
      style: null,
      categories: null,
      user: null,
      cart: []
    }
  }

  /* Requests */
  async fetchData() {
    let path = this.props.match.params.path;
    await this.setCommerce(path);
    if(this.state.commerce) {
      await this.setStyle();
      await this.setCategories();
    }
    this.setState({inProcess: false});
  }
  
  async setCommerce(path) {
    let state = this.state;
    let response = await CommerceRequest.getByPath(path);
    if (response.isOk()) {
      state.commerce = new Entity(response.data);
      document.title = state.commerce.name;
    }
    else {
      state.error = response;
      state.inProcess = false;
    }
    this.setState({ state });
  }

  async setStyle() {
    let state = this.state;
    let response = await CommerceStyleRequest.getByCommerce(this.state.commerce.id);
    if (response.isOk()) {
      state.style = new Entity(response.data);
      document.body.className = state.style.background;
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
    let state = this.state;
    product.hashId = Date.now();
    state.cart.push(product);
    this.setState({ state });
  }

  removeToCart(product) {
    let state = this.state;
    state.cart = state.cart.filter(p => p.hashId !== product.hashId);
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
      <div>
        <Header    style={this.state.style} commerce={this.state.commerce} />
        <Navbar    style={this.state.style} user={this.state.user} categories={this.state.categories} />
        <Searchbar style={this.state.style} />

        <Route     exact path={PathRoute.COMMERCE()}   component={() => <SHome     style={this.state.style} addToCart={this.addToCart.bind(this)} commerce={this.state.commerce}  /> } />
        <Route     exact path={PathRoute.CATEGORY()}   component={() => <SCategory style={this.state.style} addToCart={this.addToCart.bind(this)} /> } />
        <Route     exact path={PathRoute.PRODUCT()}    component={() => <SProduct  style={this.state.style} addToCart={this.addToCart.bind(this)} /> } />
        <Route     exact path={PathRoute.CART()}       component={() => <SCart     style={this.state.style} removeToCart={this.removeToCart.bind(this)} products={this.state.cart}  /> } />
        <Route     exact path={PathRoute.LOGIN()}      component={() => <SLogin    style={this.state.style} user={this.state.user} login={this.login.bind(this)} /> } />
        <Route     exact path={PathRoute.SINGIN()}     component={() => <SSingin   style={this.state.style} user={this.state.user} login={this.login.bind(this)} /> } />
        <Route     exact path={PathRoute.ACCOUNT()}    component={() => <SAccount  style={this.state.style} user={this.state.user} logoff={this.logoff.bind(this)} /> } />

        <Footer    style={this.state.style} commerce={this.state.commerce} />
      </div>
    );
  }
}

export default withRouter(Commerce);
