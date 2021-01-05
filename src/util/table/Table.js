function Table(props) {
    return (
        <table>
            <tbody>
                {Object.keys(props.rows).map(row => <Tr head={row} value={props.rows[row]} /> )}
            </tbody>
        </table>
    );
}
export default Table;

function Tr(props) {
    return (
        <tr>
            <td>{props.head}</td>
            <td>{props.value}</td>
        </tr>
    );
}