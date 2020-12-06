function Header(props) {
    return (
        <nav className={props.style.main}>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">&nbsp;{props.commerce.name}</a>
            </div>
        </nav>
    );
}
export default Header;