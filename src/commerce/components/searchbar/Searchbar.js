function Searchbar(props) {
    return (
        <nav className={props.style.main}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required />
                        <label className="label-icon" htmlFor="search"><i className="fa fa-search"></i>&nbsp;&nbsp;¡Busca tu producto!</label>
                    </div>
                </form>
            </div>
        </nav>
    );
}
export default Searchbar;