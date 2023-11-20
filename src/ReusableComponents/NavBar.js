export default function NavBar(props) {
  return (
    <header className="primary-header">
      <div className="navbar">
        <ul className="nav-list">
          <li className = "navbarContainer">
            <a href="#/" className={!window.location.href.includes("aboutus") ? "nav-link selected" : "nav-link"}>
              Home
            </a>
          </li>
          <li className = "navbarContainer">
            <a href="#/aboutus" className={window.location.href.includes("aboutus") ? "nav-link selected" : "nav-link"}>
              About us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
