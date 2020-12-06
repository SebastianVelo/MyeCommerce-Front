function Button(props) {
    return(
        <button className={"waves-effect waves-light btn " + props.color} onClick={props.action()} disabled={props.disabled}>
            {props.label}
        </button>
    )
}
export default Button;