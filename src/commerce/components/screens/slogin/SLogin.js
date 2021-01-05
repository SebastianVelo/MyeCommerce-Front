import React, { Component } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

/* Consts */
import Link from "../../../../consts/link/Link";
import PathLink from "../../../../consts/path/PathLink";
/* Requests */
import UserRequest from  "../../../../requests/UserRequest";
/* DTO */
import UserDTO from "../../../../dto/UserDTO";
/* Components */
import Title from "../../../../util/title/Title";
import Button from "../../../../util/button/Button";
import UserForm from "../../../../form/UserForm";

class SLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userDTO: new UserDTO()
    };
  }

  async login() {
    let response = await UserRequest.check(this.state.userDTO.username, this.state.userDTO.password);
    this.props.login(response);
  }

  synch(key, value) {
    let state = this.state;
    state.userDTO[key] = value;
    this.setState(state);
  }
  render() {
    if (this.props.user) {
      return <Redirect to={PathLink.ACCOUNT(this)} />
    }
    return (
      <div className="s-container s-login">
        <div className="row">
          <p className="flow-text right">¿No tenés cuenta? {Link.SINGIN(this)}</p> <br/>
          <Title label="Iniciar sesión" />
          {UserForm.login(this.synch.bind(this))}
          <Button label="Ingresar" action={() => this.login.bind(this)} color={this.props.style.secondary} disabled={!this.state.userDTO.isValidLogin()} />
        </div>
      </div>
    );
  }
}

export default withRouter(SLogin);
