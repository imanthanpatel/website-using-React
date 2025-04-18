import img from "../../assets/img/profilepic.jpg";

function Header() {
  return (  
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={img} alt="Profile" />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item"><a href="#home">Home</a></li>
              <li className="header__nav-item"><a href="./About.jsx">About</a></li>
              <li className="header__nav-item"><a href="#services">Services</a></li>
              <li className="header__nav-item"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header__search">
            <input type="text" placeholder="Search..." className="header__search-input" />
            <button className="header__search-button">Search</button>
          </div>
        </div>
      </header>

      {/* Optional: Render About right here if you want it to appear under header */}
       
    </>
  );
}

export default Header;
