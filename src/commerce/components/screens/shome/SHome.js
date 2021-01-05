import React, { Component } from "react";
import { withRouter } from "react-router";

/* Components */
import Title from "../../../../util/title/Title";
import Carousel from "../../../../util/carousel/Carousel";
import FeaturedProducts from "../../util/featuredproducts/FeaturedProducts";

class SHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="s-container">
        <Title label={"Inicio"} />
        <Carousel 
          elements={MockIMG()}
          cfg={{
            fullWidth: true
          }}
          id="shome" 
          slider={true}
        />
        <FeaturedProducts {...this.props} />
      </div>
    );
  }
}

export default withRouter(SHome);

function MockIMG() {
  return (
    [
      <img src={"https://picsum.photos/800?random=" + (Math.floor(Math.random() * (50 - 1)) + 1)} />,
      <img src={"https://picsum.photos/800?random=" + (Math.floor(Math.random() * (50 - 1)) + 1)} />,
      <img src={"https://picsum.photos/800?random=" + (Math.floor(Math.random() * (50 - 1)) + 1)} />,
      <img src={"https://picsum.photos/800?random=" + (Math.floor(Math.random() * (50 - 1)) + 1)} />,
      <img src={"https://picsum.photos/800?random=" + (Math.floor(Math.random() * (50 - 1)) + 1)} />,
      <img src={"https://picsum.photos/800?random=" + (Math.floor(Math.random() * (50 - 1)) + 1)} />,
      <img src={"https://picsum.photos/800?random=" + (Math.floor(Math.random() * (50 - 1)) + 1)} />,
      <img src={"https://picsum.photos/800?random=" + (Math.floor(Math.random() * (50 - 1)) + 1)} />
    ]
  )
}