import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        M.Carousel.init(document.querySelectorAll('.carousel'));
    }

    render() {
        return (
            <div className="carousel">
                <img className="carousel-item" src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
                <img className="carousel-item" src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
                <img className="carousel-item" src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
                <img className="carousel-item" src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
                <img className="carousel-item" src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
                <img className="carousel-item" src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
                <img className="carousel-item" src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
                <img className="carousel-item" src={"https://picsum.photos/400?random="+(Math.floor(Math.random() * (50 - 1)) + 1)} />
            </div>
        );
    }
}
export default Carousel;