import { NavLink } from 'react-router-dom';
import profilepic from '../assets/profilepic01.jpg';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={profilepic} alt="Company Logo" />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to="/home" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/services" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__search">
            <input
              type="text"
              placeholder="Search..."
              className="header__search-input"
              aria-label="Search"
            />
            <button className="header__search-button" aria-label="Search">
              Search
            </button>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;