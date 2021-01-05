import LinkC from "../../../util/linkc/LinkC";

function Footer(props) {
    return (
        <footer className={props.style.main + " page-footer"}>
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">{props.commerce.name}</h5>
                        <p className="grey-text text-lighten-4">{props.commerce.description}</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">RRSS</h5>
                        <LinkC path={""} icon="fa fa-instagram" />
                        <LinkC path={""} icon="fa fa-facebook" />
                        <LinkC path={""} icon="fa fa-twitter" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 MyEcommerce
                </div>
            </div>
        </footer>
    );
}
export default Footer;