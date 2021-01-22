function Button(props) {
    return(
        <button className={"btn " + props.color} onClick={props.action()} disabled={props.disabled}>
            {props.label}
        </button>
    )
}
export default Button;