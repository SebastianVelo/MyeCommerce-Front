import React, { Component } from "react";
import { withRouter } from "react-router";
import M from 'materialize-css/dist/js/materialize.min.js';

/* Consts */
import Link from "../../../consts/link/Link";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        M.Sidenav.init(document.querySelectorAll('.sidenav'));
    }

    render() {
        return (
            <nav className={this.props.style.main}>
                <div className="nav-wrapper">
                    <a href="#" data-target="nav-mob" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
                    <div className="hide-on-med-and-down">
                        <ul id="nav-desk" className="left">
                            <li>{Link.INDEX(this)}</li>
                            {this.props.categories.map(category => <li key={category.id}>{Link.CATEGORY(this, category)}</li>)}
                        </ul>
                        <div className="right">
                            {this.props.user ? <Logged t={this} /> : <NotLogged t={this} />}
                        </div>
                    </div>
                </div>
                <div>
                    <ul id="nav-mob" className={"sidenav " + this.props.style.main}>
                        {this.props.user ? <Logged t={this} /> : <NotLogged t={this} />}
                        <br/>
                        <li>{Link.INDEX(this)}</li>
                        {this.props.categories.map(category => <li key={category.id}>{Link.CATEGORY(this, category)}</li>)}
                    </ul>
                </div>
            </nav>
        );
    }

}
export default withRouter(Navbar);

function NotLogged(props) {
    return (
        <ul>
            <li>{Link.LOGIN(props.t)}</li>
            <li>{Link.SINGIN(props.t)}</li>
        </ul>
    );
}

function Logged(props) {
    return (
        <ul>
            <li>{Link.CART(props.t, props.t.props.cart.purchases.length, props.t.props.style.background)}</li>
            <li>{Link.ACCOUNT(props.t)}</li>
        </ul>
    );
}