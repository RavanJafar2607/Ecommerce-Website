import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import "../cssFolder/Header.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleBasket } from "../redux/basketSlice";
import { toggleWishList } from "../redux/wishlist";
import { themeSwicth } from "../redux/themeSlice";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { wishList } = useSelector((state: RootState) => state.wishlist);
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.body.className = theme;
    } else {
      document.body.className = theme;
    }
  }, [theme]);
  const hamburger = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  return (
    <>
      <header>
        <div className="navLink-logo">
          <NavLink to="/" className={"nav-link "}>
            E-Commerce
          </NavLink>
        </div>
        <div className="navBar">
          <nav className={hamburgerMenu ? "menuGoster" : "menuGizlet"}>
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to="/product" className={"nav-link"}>
              Product
            </NavLink>
            <NavLink to="/contact" className={"nav-link"}>
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="themeAndWishListBasket">
          <button onClick={() => dispatch(themeSwicth())}>
            {theme === "dark" ? <CiDark /> : <CiLight />}
          </button>
          <div className="wishListBtn">
            <button onClick={() => dispatch(toggleWishList())}>
              <FaRegHeart />
            </button>
            {wishList.length === 0 ? "" : <span>{wishList.length}</span>}
          </div>
          <div className="basketbtn">
            <button onClick={() => dispatch(toggleBasket())}>
              <SlBasket />
            </button>
            {basket.length === 0 ? "" : <span>{basket.length}</span>}
          </div>
        </div>
        <div className="hamburgerContainer">
          <button className="hbgBtn" onClick={hamburger}>
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
