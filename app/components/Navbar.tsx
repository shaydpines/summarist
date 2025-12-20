import Image from "next/image";
import LoginStateLink from "./Login/LoginStateLink";

const Navbar = () => {

  return (
    <nav className="nav">
      <div className="row nav__wrapper">
        <figure className="nav__img--mask">
          <Image
            src="/images/logo.png"
            alt="logo"
            loading="eager"
            width={1200}
            height={1200}
            className="nav__img"
          />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login"><LoginStateLink /></li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
