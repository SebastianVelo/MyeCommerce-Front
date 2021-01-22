import React, { Component } from "react";
import { withRouter } from "react-router";

/* Components */
import Title from "../title/Title";
import CardGrid from "../../commerce/components/util/cardgrid/CardGrid";
import Link from "../../consts/link/Link";
import Button from "../button/Button";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="s-container s-wrapper">
        <Title label={this.props.title} />
        <b>{this.props.msg}</b>
      </div>
    );
  }
}

export default withRouter(Info);
