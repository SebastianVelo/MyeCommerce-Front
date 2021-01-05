import Input from "../util/form/input/Input";

class UserForm {

    static fields = {
        email: {
            label: "E-Mail",
            type: "email"
        },
        username: {
            label: "Usuario",
            type: "text"
        },
        password: {
            label: "Contraseña",
            type: "password"
        },
        password2: {
            label: "Repite contraseña",
            type: "password"
        },
        name: {
            label: "Nombre",
            type: "text"
        },
        lastname: {
            label: "Apellido",
            type: "text"
        },
        phone: {
            label: "Celular",
            type: "text"
        },
        address: {
            label: "Direccion",
            type: "text"
        }
    };

    static keys = Object.keys(this.fields);
    static singin = (action) => this.keys.map(id => <Input key={id} id={id} label={this.fields[id].label} action={action} type={this.fields[id].type} />);
    static login  = (action) => [<Input key={0} id={"username"} label={this.fields.username.label} action={action} type={this.fields.username.type} />,
                                     <Input key={1} id={"password"} label={this.fields.password.label} action={action} type={this.fields.password.type} />];
}
export default UserForm;