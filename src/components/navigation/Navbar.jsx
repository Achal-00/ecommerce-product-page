import { useEffect, useState, useContext } from "react";
import { ItemContext } from "../App";

const width = screen.width;

const Navbar = () => {
  const { noOfItems, setNoOfItems } = useContext(ItemContext);

  if (width <= 1200) {
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState(false);

    useEffect(() => {
      if (noOfItems !== 0) {
        document.querySelector(".item__count").style.display = "block";
        document.querySelector(".cart__icon svg path").style.fill =
          "hsl(220, 13%, 13%)";
      } else {
        document.querySelector(".item__count").style.display = "none";
        document.querySelector(".cart__icon svg path").style.fill = "#69707D";
      }
    }, [noOfItems]);

    useEffect(() => {
      if (menu) {
        document.querySelector(".navbar__overlay").style.display = "flex";
        document.querySelector(".navbar__icon img").src =
          "images/icon-close.svg";
        document.querySelector(".overlay").style.display = "block";
      } else {
        document.querySelector(".navbar__overlay").style.display = "none";
        document.querySelector(".navbar__icon img").src =
          "images/icon-menu.svg";
        document.querySelector(".overlay").style.display = "none";
      }
    }, [menu]);

    useEffect(() => {
      if (cart) {
        document.querySelector(".cart-overlay").style.display = "grid";
      } else {
        document.querySelector(".cart-overlay").style.display = "none";
      }
    }, [cart]);

    function menuHandler() {
      setMenu((prev) => !prev);
    }

    function cartHandler() {
      setCart((prev) => !prev);
    }

    return (
      <section className="navbar">
        <div className="navbar__left">
          <div className="navbar__icon">
            <img
              src="images/icon-menu.svg"
              alt="menu icon"
              onClick={menuHandler}
            />
          </div>
          <h1>sneakers</h1>
          <div className="navbar__overlay">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="navbar__right">
          <div className="cart__icon" onClick={cartHandler}>
            <div className="item__count">{noOfItems}</div>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <div className="avatar__icon">
            <img src="images/image-avatar.png" alt="avatar" />
          </div>
        </div>
      </section>
    );
  } else {
    const [desktopCart, setDesktopCart] = useState(false);

    useEffect(() => {
      if (noOfItems !== 0) {
        document.querySelector(".desktop__cart__content h4").style.display =
          "none";
        document.querySelector(
          ".desktop__cart__content__details"
        ).style.display = "grid";
      } else {
        document.querySelector(".desktop__cart__content h4").style.display =
          "block";
        document.querySelector(
          ".desktop__cart__content__details"
        ).style.display = "none";
      }
    }, [noOfItems]);

    useEffect(() => {
      if (desktopCart) {
        document.querySelector(".desktop__cart-overlay").style.display = "grid";
      } else {
        document.querySelector(".desktop__cart-overlay").style.display = "none";
      }
    }, [desktopCart]);

    useEffect(() => {
      if (noOfItems !== 0) {
        document.querySelector(".desktop__item__count").style.display = "block";
        document.querySelector(".desktop__cart__icon svg path").style.fill =
          "hsl(220, 13%, 13%)";
      } else {
        document.querySelector(".desktop__item__count").style.display = "none";
        document.querySelector(".desktop__cart__icon svg path").style.fill =
          "#69707D";
      }
    }, [noOfItems]);

    function desktopCartHandler() {
      setDesktopCart((prev) => !prev);
    }

    return (
      <section className="navbar__desktop">
        <div className="navbar__desktop__left">
          <h1>sneakers</h1>
          <div className="desktop__links">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="navbar__desktop__right">
          <section className="desktop__cart-overlay">
            <h4>cart</h4>
            <div className="desktop__line"></div>
            <div className="desktop__cart__content">
              <h4>Your cart is empty.</h4>
              <div className="desktop__cart__content__details">
                <div className="desktop__image1">
                  <img
                    src="images/image-product-1-thumbnail.jpg"
                    alt="thumbnail"
                  />
                </div>
                <div className="desktop__cart__product">
                  <p>Fall limited Edition Sneakers</p>
                  <p>
                    $125.00 x {noOfItems}
                    <span>&nbsp;${noOfItems * 125}.00</span>
                  </p>
                </div>
                <div className="desktop__image2">
                  <img
                    src="images/icon-delete.svg"
                    alt="delete"
                    onClick={() => setNoOfItems(0)}
                  />
                </div>
                <div className="desktop__checkout-btn">
                  <button>checkout</button>
                </div>
              </div>
            </div>
          </section>
          <div className="desktop__cart__icon" onClick={desktopCartHandler}>
            <div className="desktop__item__count">{noOfItems}</div>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <div className="desktop__avatar">
            <img src="images/image-avatar.png" alt="avatar" />
          </div>
        </div>
      </section>
    );
  }
};

export default Navbar;
