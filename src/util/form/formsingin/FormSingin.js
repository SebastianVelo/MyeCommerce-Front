import InputBean from "../inputbean/InputBean";

const FormSingin = (action) => [
    new InputBean("name", "Nombre", action),
    new InputBean("lastname", "Apellido", action),
    new InputBean("email", "E-Mail", action, "email"),
    new InputBean("user", "Usuario", action),
    new InputBean("password", "Contraseña", action, "password"),
    new InputBean("password2", "Repite contraseña", action, "password")
]
export default FormSingin;