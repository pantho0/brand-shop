import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { user } = useContext(AuthContext);
  const selectedBrand = useLoaderData();
  const { name, image, brandName, description, price, rating, type } =
    selectedBrand;
  const notify = () => toast("Added To Cart");
  const choosedProduct = {name, image, brandName, description, price, rating, type};
  const signedUser = user;
  console.log(choosedProduct, signedUser);

  const cartData = { ...choosedProduct, ...signedUser };
  console.log(cartData);

  const handleCart = () => {
    fetch(
      `https://brand-shop-server-beryl-five.vercel.app/orders`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        notify()
      });
  };

  return (
    <div className="w-full">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="card  md:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={brandName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-lg font-bold">{brandName}</p>
          <p className="text-lg">{price}</p>
          <p>Rating : {rating}</p>
          <p>Type : {type}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleCart} className="btn btn-primary">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
