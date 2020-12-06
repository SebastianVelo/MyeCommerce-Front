import { Link } from "react-router-dom";

function LinkC(props) {
    return (
        <Link id={props.id} to={{pathname: props.path}}>
            {props.label}
        </Link>
    )
}
export default LinkC;