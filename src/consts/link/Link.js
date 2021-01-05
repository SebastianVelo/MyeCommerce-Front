/* Consts */
import PathLink from "../path/PathLink";

/* Components */
import LinkC from "../../util/linkc/LinkC";

class Link {
    static INDEX        = (t)                => <LinkC path={PathLink.COMMERCE(t)}               label="Inicio" />;
    static CONTINUE     = (t)                => <LinkC path={PathLink.COMMERCE(t)}               label="Continuar comprando" />;
    static LOGIN        = (t)                => <LinkC path={PathLink.LOGIN(t)}                  label="Ingresa" />;
    static SINGIN       = (t)                => <LinkC path={PathLink.SINGIN(t)}                 label="Registrate" />;
    static ACCOUNT      = (t)                => <LinkC path={PathLink.ACCOUNT(t)}                icon="fa fa-user-circle" />;
    static CART         = (t, quant, color)  => <LinkC path={PathLink.CART(t)}                   icon="fa fa-shopping-cart" badge={quant} color={color} />;
    static CARTBACK     = (t)                => <LinkC path={PathLink.CART(t)}                   label="Volver" />;
    static CARTDETAIL   = (t)                => <LinkC path={PathLink.CARTDETAIL(t)}             label="Siguiente" />;
    static CATEGORY     = (t, category)      => <LinkC path={PathLink.CATEGORY(t, category.id)}  label={category.name} />;
    static PRODUCT      = (t, product, img)  => <LinkC path={PathLink.PRODUCT(t, product.id)}    label={product.name} img={img ? product.imgs[0].url : null} />
}
export default Link;