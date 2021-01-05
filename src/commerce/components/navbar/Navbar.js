import React, { Component } from "react";
import { withRouter } from "react-router";

/* Consts */
import Link from "../../../consts/link/Link";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <nav className={this.props.style.main}>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>{Link.INDEX(this)}</li>
                        {this.props.categories.map(category => <li key={category.id}>{Link.CATEGORY(this, category)}</li>)}
                    </ul>
                    {this.props.user ? <Logged t={this} /> : <NotLogged t={this} />}
                </div>
            </nav>
        );
    }

}
export default withRouter(Navbar);

function NotLogged(props) {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>{Link.LOGIN(props.t)}</li>
            <li>{Link.SINGIN(props.t)}</li>
        </ul>
    );
}

function Logged(props) {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>{Link.CART(props.t, props.t.props.cart.purchases.length, props.t.props.style.background)}</li>
            <li>{Link.ACCOUNT(props.t)}</li>
        </ul>
    );
}