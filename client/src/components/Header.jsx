import { Link } from "react-router-dom";

import headerData from "../mockData/headerData";
import Preloader from "./Preloader";

import useData from "../hooks/useData";
import useBurger, { overflow, noOverflow } from "../hooks/useBurger";

export const Logo = ({ logoData: { alt, href, src } }) => {
  return (
    <div className="header__logo">
      <a href={href} className="logo__link">
        <img className="link__name" src={src} alt={alt} />
      </a>
    </div>
  );
};

export const Burger = ({ isBurgerActive, setIsMenuShown }) => (
  <div
    className={
      isBurgerActive ? "header__burger_menu " : "header__burger_menu hidden"
    }
    onClick={() => {
      setIsMenuShown(true);
      noOverflow();
    }}
  >
    <div className="burger_menu__line"></div>
    <div className="burger_menu__line"></div>
    <div className="burger_menu__line"></div>
  </div>
);

export const MenuItem = ({ menuItemData: { type, title, href } }) => {
  const handleClick = () => {
    if (href === "#") return;

    const toNode = document.querySelector(`${href}`);

    try {
      toNode.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };

  if (type === "button")
    return (
      <li className="menu__item">
        <button className="item__link" onClick={handleClick}>
          {title}
        </button>
      </li>
    );

  if (type === "link")
    return (
      <li className="menu__item">
        <Link to={href} className="item__link">
          {title}
        </Link>
      </li>
    );
};

export const Button = ({ buttonData: { title, href, isPrimary } }) => {
  return (
    <a href={href}>
      <button
        className={`cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}`}
      >
        {title}
      </button>
    </a>
  );
};

export const RightHeader = ({
  rightHeaderData,
  isBurgerActive,
  isMenuShown,
  setIsMenuShown,
}) => {
  const { menuData, buttonsData } = rightHeaderData;

  return (
    <>
      <div className={isMenuShown ? "header__right" : "header__right hidden"}>
        <aside className="header__menu">
          <div
            className={isBurgerActive ? "menu__close" : "menu__close hidden"}
            onClick={() => {
              setIsMenuShown(false);
              overflow();
            }}
          >
            <div className="menu__line"></div>
            <div className="menu__line"></div>
          </div>
          <ul className="menu">
            {menuData.map((item, index) => (
              <MenuItem key={index} menuItemData={item} />
            ))}
          </ul>
        </aside>
        <div className="cta_buttons">
          {buttonsData.map((button, index) => (
            <Button key={index} buttonData={button} />
          ))}
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const { isBurgerActive, isMenuShown, setIsMenuShown } = useBurger();

  const { isError, error, data, isLoading } = useData({
    endpoint: "header",
    options: {
      method: "GET",
    },
  });

  if (isError) {
    console.log("error");
    console.log(error);
  }

  // if (!isLoading) {
  //   console.log("!isLoading");
  //   console.log("data");
  //   console.log(data);
  // }

  if (isLoading) return <Preloader />;
  const renderedData = data || headerData;
  const { logoData, menuData, buttonsData } = renderedData;

  return (
    <>
      <Logo logoData={logoData} />
      <Burger isBurgerActive={isBurgerActive} setIsMenuShown={setIsMenuShown} />
      <RightHeader
        rightHeaderData={{
          menuData,
          buttonsData,
        }}
        isBurgerActive={isBurgerActive}
        isMenuShown={isMenuShown}
        setIsMenuShown={setIsMenuShown}
      />
    </>
  );
};

export default Header;
