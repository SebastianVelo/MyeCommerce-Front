function Input(props) {
    return (
        <div className="input-field col s12 m6 l6">
            <input id={props.id} type={props.type} className="validate" onChange={(e) => props.action(props.id, e.target.value)} disabled={props.disabled} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}
export default Input;