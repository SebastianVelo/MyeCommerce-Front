function Paginator(props) {
  if(props.totalPages < 2) {
    return "";
  }
  return (
    <ul className="pagination center">
      <Pages {...props} />
    </ul>
  );
}

export default Paginator;

function Pages(props) {
  let pages = [];
  for (let i = 0; i < props.totalPages; i++) {
    pages.push(<Page key={i} page={i} changePage={props.changePage} activePage={props.activePage}/>);
  }
  return pages;
}

function Page(props) {
  let className = props.activePage === props.page ? "active black" : "white";
  return (
    <li className={className}>
      <a onClick={(ev) => props.changePage(props.page)}>{props.page + 1}</a>
    </li>
  );
}