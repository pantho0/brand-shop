
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Details = () => {
  const {user} = useContext(AuthContext)
  const selectedBrand = useLoaderData();
  const { name, image, brandName, description, price, rating, type } =
    selectedBrand;

  const choosedProduct = selectedBrand;
  const signedUser = user;
  console.log(choosedProduct, signedUser);

  const cartData = {...choosedProduct, ...signedUser}
  console.log(cartData);
    
  const handleCart = () =>{
    fetch(`http://localhost:5001/orders`, {
      method: "POST",
      headers: {
        'content-type' : 'application/json',

      },
      body: JSON.stringify(cartData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }



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
            <button onClick={handleCart} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
