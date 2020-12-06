import React, { Component } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

/* Consts */
import Link from "../../../../consts/link/Link";
import PathLink from "../../../../consts/path/PathLink";
/* Requests */
import UserRequest from  "../../../../requests/UserRequest";
/* Utils */
import FormLogin from "../../../../util/form/formlogin/FormLogin";
import FormValidator from "../../../../util/form/formvalidator/FormValidator";
/* Components */
import Title from "../../../../util/title/Title";
import Input from "../../../../util/form/input/Input";
import Button from "../../../../util/button/Button";

class SLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    FormLogin().forEach(input => this.state[input.id] = "");
  }

  async login() {
    let response = await UserRequest.check(this.state.user, this.state.password);
    this.props.login(response);
  }

  isValidForm() {
    return FormValidator.isValidUser(this.state.user) && FormValidator.isValidPassword(this.state.password);
  }

  synch(key, value) {
    let state = this.state;
    state[key] = value;
    this.setState(state);
  }

  render() {
    if (this.props.user) {
      return <Redirect to={PathLink.ACCOUNT(this)} />
    }
    let form = FormLogin(this.synch.bind(this));
    return (
      <div className="s-container s-login">
        <div className="row">
          <p className="flow-text right">¿No tenés cuenta? {Link.SINGIN(this)}</p> <br/>
          <Title label="Iniciar sesión" />
          {form.map(input => <Input key={input.id} id={input.id} label={input.label} action={input.action} type={input.type} />)  }
          <Button label="Ingresar" action={() => this.login.bind(this)} color={this.props.style.secondary} disabled={!this.isValidForm()} />
        </div>
      </div>
    );
  }
}

export default withRouter(SLogin);
