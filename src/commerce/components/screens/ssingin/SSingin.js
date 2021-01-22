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

class SSingin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userDTO: new UserDTO()
    };
  }

  async singin() {
    let response = await UserRequest.insert(this.state.userDTO);
    if(response.isOk()) {
      this.props.login(response);
    }
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
    console.log(this.state.userDTO);
    return (
      <div className="s-container s-wrapper">
        <div className="row">
          <p className="flow-text right">¿Ya tenés cuenta? {Link.LOGIN(this)}</p> <br/>
          <Title label="Registrate" />
          {UserForm.singin(this.synch.bind(this))}
          <Button label="Finalizar" action={() => this.singin.bind(this)} color={this.props.style.secondary} disabled={!this.state.userDTO.isValid()} />
        </div>
      </div>
    );
  }
}

export default withRouter(SSingin);
