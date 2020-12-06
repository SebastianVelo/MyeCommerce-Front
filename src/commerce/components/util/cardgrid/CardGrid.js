import Card from "./card/Card";

function CardGrid(props) {
    return (
        <div className="row">
            {props.products.map(product => <Card key={product.id} product={product} cfg={props.add ? Add(props) : Remove(props) } />)}
        </div>
    );
}
export default CardGrid;

const Add = (props) => {
    return {
        buttonColor: props.buttonColor,
        action: props.action,
        label: "Añadir al carrito"
    }
}

const Remove = (props) => {
    return {
        buttonColor: "red accent-3",
        action: props.action,
        label: "Quitar del carrito"
    }
}