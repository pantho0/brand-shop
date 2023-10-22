import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center ">
      <h1 className="text-9xl text-white">
        4<span className="text-red-700">0</span>4
      </h1>
      <div className="w-96 mx-auto">
      <p className="text-white w-96 text-justify">
        Oops! Looks like you took a wrong turn. 🦄 Don't worry, you're still in
        the enchanted forest of the internet, but it seems like the path you
        were following led to a magical dead end. 
        The fairies are working hard to fix it and get you back on track. ✨🔮
      </p>
     
      </div>
      <Link to={'/'}>
      <button className="btn bg-red-700 border-0 text-white mt-4">Go Back Home</button>
      </Link>
    </div>

  );
};

export default ErrorPage;