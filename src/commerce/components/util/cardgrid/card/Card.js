import { Component } from "react";
import { withRouter } from "react-router";

/* Consts */
import Link from "../../../../../consts/link/Link";
/* Components */
import Button from "../../../../../util/button/Button";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    action() {
        this.props.cfg.action(this.props.product);
    }

    render() {
        return (
            <div className="col s6 m6 l3">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
                    </div>
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4">
                            {Link.PRODUCT(this, this.props.product)}
                        </span>
                        <Button label={this.props.cfg.label} action={() => this.action.bind(this)} color={this.props.cfg.buttonColor} disabled={this.props.product.stock === 0} />
                        <p className="flow-text">{this.props.product.currency}{this.props.product.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Card);