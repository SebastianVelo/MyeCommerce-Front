/* Consts */
import PathLink from "../path/PathLink";

/* Components */
import LinkC from "../../util/linkc/LinkC";

class Link {
    static INDEX    = (t)           => <LinkC path={PathLink.COMMERCE(t)}               label="Inicio" />;
    static CONTINUE = (t)           => <LinkC path={PathLink.COMMERCE(t)}               label="Continuar comprando" />;
    static LOGIN    = (t)           => <LinkC path={PathLink.LOGIN(t)}                  label="Ingresa" />;
    static SINGIN   = (t)           => <LinkC path={PathLink.SINGIN(t)}                 label="Registrate" />;
    static ACCOUNT  = (t)           => <LinkC path={PathLink.ACCOUNT(t)}                label="Mi cuenta" />;
    static CART     = (t)           => <LinkC path={PathLink.CART(t)}                   label="Carrito" />;
    static CATEGORY = (t, category) => <LinkC path={PathLink.CATEGORY(t, category.id)}  label={category.name} />;
    static PRODUCT  = (t, product)  => <LinkC path={PathLink.PRODUCT(t, product.id)}    label={product.name} />
}
export default Link;