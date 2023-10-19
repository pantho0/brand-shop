import React from "react";
import { Link } from "react-router-dom";

const BrandCards = ({ brand }) => {
  console.log(brand);
  const { brandName, image } = brand || {};
  return (
    <>
    <div>
      <Link to={`/brand/${brandName}`}>
      <div className="card w-96 glass">
        <figure>
          <img
            className="w-full h-60"
            src={image}
            alt={brandName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brandName}</h2>
          </div>
        </div>
      </Link>
     </div>
    </>
  );
};

export default BrandCards;
