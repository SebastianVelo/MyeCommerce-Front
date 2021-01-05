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
            cfg: this.props.add ? Add(this.props) : Remove(this.props)
        }
    }

    action() {
        this.state.cfg.action(this.props.product);
    }

    render() {
        return (
            <div className="card hoverable">
                <div className="card-image">
                    {Link.PRODUCT(this, this.props.product, true)}
                </div>
                <div className="card-content">
                    <span className="card-title grey-text text-darken-4 truncate">
                        {Link.PRODUCT(this, this.props.product)}
                    </span>
                    <Button label={this.state.cfg.label} action={() => this.action.bind(this)} color={this.state.cfg.buttonColor} disabled={this.props.product.stock === 0} />
                    <p className="flow-text">{this.props.product.currency}{this.props.product.price}</p>
                </div>
            </div>
        );
    }
}
export default withRouter(Card);


const Add = (props) => {
    return {
        buttonColor: props.buttonColor,
        action: props.action,
        label: "Añadir al carrito"
    }
}

const Remove = (props) => {
    return {
        buttonColor: "red accent-3",
        action: props.action,
        label: "Quitar del carrito"
    }
}