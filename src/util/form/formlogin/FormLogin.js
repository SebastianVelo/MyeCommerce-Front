import InputBean from "../inputbean/InputBean";

const FormLogin = (action) => [
    new InputBean("user", "Usuario", action),
    new InputBean("password", "Contraseña", action, "password")
]
export default FormLogin;