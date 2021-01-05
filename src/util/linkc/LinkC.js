import { Link } from "react-router-dom";

function LinkC(props) {
    return (
        <Link id={props.id} to={{pathname: props.path}}>
            {!props.img  ? props.label : ""}
            {props.img   ? <img src={props.img} /> : ""}
            {props.icon  ? <i id="icon" className={props.icon}></i> : ""}
            {props.badge ? <span className={"new badge " + props.color} data-badge-caption="">{props.badge}</span> : "" }
        </Link>
    )
}
export default LinkC;