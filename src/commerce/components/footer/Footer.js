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
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 MyEcommerce
                    <a className="grey-text text-lighten-4 right" href="#!">
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;