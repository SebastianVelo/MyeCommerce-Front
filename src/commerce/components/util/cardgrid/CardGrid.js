import Card from "./card/Card";

function CardGrid(props) {
    return (
        <div className="row">
            {props.products.map((product, index) =>
                <div key={index} className="col s12 m6 l3 xl3">
                    <Card key={product.id} product={product} {...props} />
                </div>)
            }
        </div>
    );
}
export default CardGrid;