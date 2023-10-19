import React from "react";

const BrandCards = ({ brand }) => {
  console.log(brand);
  const { brandName, image } = brand || {};
  return (
    <>
    <div>
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
     </div>
    </>
  );
};

export default BrandCards;
