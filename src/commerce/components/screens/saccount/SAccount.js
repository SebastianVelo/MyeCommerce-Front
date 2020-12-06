import React, { Component } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

/* Consts */
import PathLink from "../../../../consts/path/PathLink";
/* Components */
import Title from "../../../../util/title/Title";
import Button from "../../../../util/button/Button";

class SAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  synch(key, value) {
    let state = this.state;
    state[key] = value;
    this.setState(state);
  }

  render() {
    if (!this.props.user) {
      return <Redirect to={PathLink.LOGIN(this)} />
    }
    return (
      <div className="s-container s-login">
        <div className="row">
          <Title label="Mi cuenta" />
          
          <Button label="Cerrar sesión" action={() => this.props.logoff} color={this.props.style.secondary} />
        </div>
      </div>
    );
  }
}

export default withRouter(SAccount);
