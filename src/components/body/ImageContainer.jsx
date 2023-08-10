import { useEffect, useState, useContext } from "react";
import { ItemContext } from "../App";

const width = screen.width;

const imageURL = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const ImageContainer = () => {
  if (width <= 1200) {
    const [image, setImage] = useState(0);
    const { noOfItems, setNoOfItems } = useContext(ItemContext);

    useEffect(() => {
      if (noOfItems !== 0) {
        document.querySelector(".cart__content h4").style.display = "none";
        document.querySelector(".cart__content__details").style.display =
          "grid";
      } else {
        document.querySelector(".cart__content h4").style.display = "block";
        document.querySelector(".cart__content__details").style.display =
          "none";
      }
    }, [noOfItems]);

    function prevHandler() {
      if (image === 0) {
        setImage(3);
      } else {
        setImage((prev) => prev - 1);
      }
    }

    function nextHandler() {
      if (image === 3) {
        setImage(0);
      } else {
        setImage((prev) => prev + 1);
      }
    }

    function deleteHandler() {
      setNoOfItems(0);
    }

    useEffect(() => {
      document.querySelector(".product").src = `${imageURL[image]}`;
    }, [image]);

    return (
      <div className="product__image">
        <section className="cart-overlay">
          <h4>cart</h4>
          <div className="line"></div>
          <div className="cart__content">
            <h4>Your cart is empty.</h4>
            <div className="cart__content__details">
              <div className="img1">
                <img
                  src="/images/image-product-1-thumbnail.jpg"
                  alt="thumbnail"
                />
              </div>
              <div className="cart__product">
                <p>Fall limited Edition Sneakers</p>
                <p>
                  $125.00 x {noOfItems} <span>&nbsp;${noOfItems * 125}.00</span>
                </p>
              </div>
              <div className="img2">
                <img
                  src="/images/icon-delete.svg"
                  alt="delete"
                  onClick={deleteHandler}
                />
              </div>
              <div className="checkout-btn">
                <button>checkout</button>
              </div>
            </div>
          </div>
        </section>
        <img
          src="/images/image-product-1.jpg"
          alt="product image"
          className="product"
        />
        <div className="common-navigate">
          <img
            src="/images/icon-previous.svg"
            alt="previous"
            onClick={prevHandler}
          />
        </div>
        <div className="common-navigate">
          <img
            src="/images/icon-next.svg"
            alt="previous"
            onClick={nextHandler}
          />
        </div>
      </div>
    );
  } else {
    const [imageDesktop, setImageDesktop] = useState(0);
    const [overlay, setOverlay] = useState(false);

    useEffect(() => {
      document.querySelector(
        ".desktop__main__image img"
      ).src = `${imageURL[imageDesktop]}`;
      document.querySelector(
        ".desktop__overlay__image img"
      ).src = `${imageURL[imageDesktop]}`;
      document.querySelectorAll(".common__desktop__img").forEach((el) => {
        el.style.border = "none";
      });
      document.querySelectorAll(".white--overlay").forEach((el) => {
        el.style.display = "none";
      });
      document.querySelector(`.desktop__img${imageDesktop + 1}`).style.border =
        "2px solid var(--orange)";
      document.querySelector(
        `.desktop__img${imageDesktop + 1} .white--overlay`
      ).style.display = "block";
    }, [imageDesktop]);

    useEffect(() => {
      if (overlay) {
        document.querySelector(".desktop__image__overlay").style.display =
          "grid";
      } else {
        document.querySelector(".desktop__image__overlay").style.display =
          "none";
      }
    }, [overlay]);

    function overlayHandler() {
      setOverlay((prev) => !prev);
    }

    function DesktopPrevHandler() {
      if (imageDesktop === 0) {
        setDesktopImage(3);
      } else {
        setImageDesktop((prev) => prev - 1);
      }
    }

    function DesktopNextHandler() {
      if (imageDesktop === 3) {
        setImageDesktop(0);
      } else {
        setImageDesktop((prev) => prev + 1);
      }
    }

    return (
      <div className="desktop__image__section">
        <div className="desktop__image__overlay">
          <div className="desktop__image__overlay__container">
            <svg
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={overlayHandler}
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </svg>
            <div className="desktop__overlay__image">
              <img src="/images/image-product-1.jpg" alt="product preview" />
              <div className="desktop__common desktop__previous">
                <img
                  src="/images/icon-previous.svg"
                  alt="previous"
                  onClick={DesktopPrevHandler}
                />
              </div>
              <div className="desktop__common desktop__next">
                <img
                  src="/images/icon-next.svg"
                  alt="next"
                  onClick={DesktopNextHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="desktop__main__image">
          <img
            src="/images/image-product-1.jpg"
            alt="product preview"
            onClick={overlayHandler}
          />
        </div>
        <div className="desktop__image__subsection">
          <div className="desktop__img1 common__desktop__img">
            <img
              src="/images/image-product-1-thumbnail.jpg"
              alt="thumbnail-1"
              onClick={() => setImageDesktop(0)}
            />
            <div className="white--overlay"></div>
          </div>
          <div className="desktop__img2 common__desktop__img">
            <img
              src="/images/image-product-2-thumbnail.jpg"
              alt="thumbnail-2"
              onClick={() => setImageDesktop(1)}
            />
            <div className="white--overlay"></div>
          </div>
          <div className="desktop__img3 common__desktop__img">
            <img
              src="/images/image-product-3-thumbnail.jpg"
              alt="thumbnail-3"
              onClick={() => setImageDesktop(2)}
            />
            <div className="white--overlay"></div>
          </div>
          <div className="desktop__img4 common__desktop__img">
            <img
              src="/images/image-product-4-thumbnail.jpg"
              alt="thumbnail-4"
              onClick={() => setImageDesktop(3)}
            />
            <div className="white--overlay"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default ImageContainer;
