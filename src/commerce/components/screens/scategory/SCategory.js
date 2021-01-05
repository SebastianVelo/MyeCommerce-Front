import React, { Component } from "react";
import { withRouter } from "react-router";

/* Request */
import CategoryRequest from "../../../../requests/CategoryRequest";
import ProductRequest from "../../../../requests/ProductRequest";
/* Models */
import Entity from "../../../../models/Entity";
/* Components */
import Title from "../../../../util/title/Title";
import ProgressBar from "../../../../util/progressbar/ProgressBar";
import CardGrid from "../../util/cardgrid/CardGrid";
import Paginator from "../../util/paginator/Paginator";
/* CSS */
import '../Screens.css';
import Link from "../../../../consts/link/Link";

class SCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProcess: true,
      error: null,
      category: null,
      products: null,
      paginator: {
        active: 0,
        perPage: 8
      }
    }
  }

  CategoryList() {
    return (
      <div className="collection with-header">
        <div className="collection-header"><h4>Categorias</h4></div>
        {this.props.categories.map(category => 
          <p className={"collection-item hoverable " + (category.id === this.state.category.id ? this.props.style.secondary : "")} key={category.id}>
            {Link.CATEGORY(this, category)}
          </p>)
        }
      </div>
    );
  }

  changePage(page) {
    let state = this.state;
    state.paginator.active = page;
    this.setState({ state });
  }

  paginatedProducts() {
    let start = this.state.paginator.active * this.state.paginator.perPage;
    let end = start + this.state.paginator.perPage;
    return this.state.products.slice(start, end);
  }

  totalPages() {
    return Math.ceil(this.state.products.length / this.state.paginator.perPage);
  }

  async fetchData() {
    let id = this.props.match.params.id;
    await this.setCategory(id);
    if (this.state.category) {
      await this.setProducts();
    }
    this.setState({ inProcess: false });
  }

  async setCategory(id) {
    let state = this.state;
    let response = await CategoryRequest.getById(id);
    if (response.isOk()) {
      state.category = new Entity(response.data);
    }
    else {
      state.error = response;
      state.inProcess = false;
    }
    this.setState({ state });
  }

  async setProducts() {
    let state = this.state;
    let response = await ProductRequest.getByCategory(this.state.category.id);
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
      <div className="s-container row">
        <div className="col s12 m12 l3 xl3">
          {this.CategoryList()}
        </div>
        <div className="col s12 m12 l9 xl9 s-login hoverable">
          <Title label={this.state.category.name} />
          <CardGrid products={this.paginatedProducts()} buttonColor={this.props.style.secondary} action={this.props.addToCart} add={true} />
          <Paginator totalPages={this.totalPages()} activePage={this.state.paginator.active} changePage={this.changePage.bind(this)} />
        </div>
      </div>
    );
  }
}

export default withRouter(SCategory);
