import { useLoaderData } from "react-router-dom";

const Details = () => {
  const selectedBrand = useLoaderData();
  const { _id, name, image, brandName, description, price, rating, type } =
    selectedBrand;
  console.log(selectedBrand);
  return (
    <div className="w-full">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={brandName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-lg font-bold">{brandName}</p>
          <p className="text-lg">{price}</p>
          <p>Rating : {rating}</p>
          <p>Type : {type}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
