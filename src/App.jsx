import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="component__main">
        <nav className="nav__box">
          <p className="logo">snap</p>
          <img
            className="icon__menu-open"
            src="../public/images/icon-menu.svg"
            alt="menu open icon"
            onClick={() => setIsMenuOpen(true)}
          />
        </nav>

        <main className="main__box">
          <img src="../public/images/image-hero-mobile.png" alt="hero img" />

          <div className="text__box">
            <h1 className="heading">Make remote work</h1>
            <p className="text">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="btn--black">Learn more</button>

            <div className="clients__box">
              <img
                className="clients__img--databiz"
                src="../public/images/client-databiz.svg"
              />
              <img
                className="clients__img--audiophile"
                src="../public/images/client-audiophile.svg"
              />
              <img
                className="clients__img--meet"
                src="../public/images/client-meet.svg"
              />
              <img
                className="clients__img--maker"
                src="../public/images/client-maker.svg"
              />
            </div>
          </div>
        </main>
      </div>

      {isMenuOpen && (
        <div className="overlay">
          <div className="modal">
            <img
              className="icon__menu-close"
              src="../public/images/icon-close-menu.svg"
              onClick={() => setIsMenuOpen(false)}
            />
            <ul className="menu__list">
              <li className="menu__icon">
                Features
                <img src="../public/images/icon-arrow-down.svg" height="10px" />
              </li>
              <li className="menu__icon">
                Company
                <img src="../public/images/icon-arrow-down.svg" height="10px" />
              </li>
              <li className="">Careers</li>
              <li className="">About</li>
            </ul>
            <div className="btn__box">
              <button className="btn__menu btn__login">Login</button>
              <button className="btn__menu btn__register">Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
