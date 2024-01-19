/* Features Company Careers About Login Register    */
export default function App() {
  return (
    <div className="wrapper">
      <nav className="nav__box">
        <p className="logo">snap</p>
        <img
          className="icon__menu-open"
          src="../public/images/icon-menu.svg"
          alt="menu open icon"
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
  );
}
