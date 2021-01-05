import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        M.Carousel.init(document.querySelectorAll('#'+this.props.id), this.props.cfg);
        M.Materialbox.init(document.querySelectorAll('.materialboxed'));
    }

    render() {
        return (
            <div id={this.props.id} className={"carousel center " + (this.props.slider ? "carousel-slider" : "")}>
                {this.props.elements.map((e, index) => <div key={index} className="carousel-item">{e}</div>)}
            </div>
        );
    }
}
export default Carousel;