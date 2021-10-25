import React from "react";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <a className="logo link" href="/">
          <div className="logo-container">
            <p className="logo-item-vertical">
              <span className="logo-item-vertical-letter">w</span>
              <span className="logo-item-vertical-letter">e</span>
            </p>

            <p className="logo-item-big-r">R</p>
            <p className="logo-item-devs">devs</p>
          </div>
        </a>
        <nav className="navigation">
          <a className="link" href="/">
            HOME
          </a>
          <a className="link" href="/">
            ABOUT US
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
