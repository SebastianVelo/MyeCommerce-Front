import React, { Component } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

/* Consts */
import Link from "../../../../consts/link/Link";
import PathLink from "../../../../consts/path/PathLink";
/* Utils */
import FormSingin from "../../../../util/form/formsingin/FormSingin";
import FormValidator from "../../../../util/form/formvalidator/FormValidator";
/* Components */
import Title from "../../../../util/title/Title";
import Button from "../../../../util/button/Button";
import Input from "../../../../util/form/input/Input";

class SSingin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    FormSingin().forEach(input => this.state[input.id] = "");
  }

  async singin() {
    let response// = await UserRequest.check(this.state.user, this.state.password);
    this.props.login(response);
  }

  isValidForm() {
    return FormValidator.isValidString(this.state.name)       &&
           FormValidator.isValidString(this.state.lastname)   &&
           FormValidator.isValidUser(this.state.user)         && 
           FormValidator.isValidPassword(this.state.password) && 
           this.state.password === this.state.password2;
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
    let form = FormSingin(this.synch.bind(this));
    return (
      <div className="s-container s-login">
        <div className="row">
          <p className="flow-text right">¿Ya tenés cuenta? {Link.LOGIN(this)}</p> <br/>
          <Title label="Registrate" />
          {form.map(input => <Input key={input.id} id={input.id} label={input.label} action={input.action} type={input.type} />)  }
          <Button label="Finalizar" action={() => this.singin.bind(this)} color={this.props.style.secondary} disabled={!this.isValidForm()} />
        </div>
      </div>
    );
  }
}

export default withRouter(SSingin);
