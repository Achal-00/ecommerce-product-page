import { useState, useContext } from "react";
import { ItemContext } from "../App";

const ContentDetails = () => {
  const [itemCount, setItemCount] = useState(0);

  const { setNoOfItems } = useContext(ItemContext);

  function decrementHandler() {
    if (itemCount === 0) {
      return;
    } else {
      setItemCount((prev) => prev - 1);
    }
  }

  function incrementHandler() {
    setItemCount((prev) => prev + 1);
  }

  function submitHandler() {
    setNoOfItems(itemCount);
  }

  return (
    <div className="product__details">
      <h4>sneaker company</h4>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price__details">
        <div className="new__price">
          <h1>$125.00</h1>
          <span>50%</span>
        </div>
        <span className="prev__price">$250.00</span>
      </div>
      <div className="desktop--combine">
        <div className="product__count">
          <div className="decrement">
            <img
              src="/images/icon-minus.svg"
              alt="decrement"
              onClick={decrementHandler}
            />
          </div>
          <h4>{itemCount}</h4>
          <div className="increment">
            <img
              src="/images/icon-plus.svg"
              alt="increment"
              onClick={incrementHandler}
            />
          </div>
        </div>
        <div className="addtocart">
          <button onClick={submitHandler}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fill-rule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
