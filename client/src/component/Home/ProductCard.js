import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { AiFillStar } from "react-icons/ai";
import deliverylogo from "../../images/deliverylogo.png";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const findPercentOff = (regular, offer) => {
    let diff = regular - offer;
    let percent = (diff * 100) / regular;

    return Math.round(percent);
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div className="productcard_mid">
        <div className="product_card_ratings_wrapper">
          <span className="product__ratings">
            {product.ratings} <AiFillStar />{" "}
          </span>
          <span className="productCardSpan">
            {" "}
            ({product.numOfReviews} Reviews)
          </span>
        </div>
        <img src={deliverylogo} alt="" className="productcard_deliverylogo" />
      </div>
      <span className="productcard_price">
        {`₹${product.offerprice}`}
        <span className="productcard_regular_price">{`₹${product.regularprice}`}</span>
        <span className="productcard_off_percentage">{`${findPercentOff(
          product.regularprice,
          product.offerprice
        )}%off`}</span>
      </span>
    </Link>
  );
};

export default ProductCard;
