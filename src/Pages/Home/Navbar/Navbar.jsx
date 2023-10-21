import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};
  console.log(user);
  const handleLogout = () =>{
    logOut()
  }
  const navlinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addproduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>My Cart</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-white ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <img className="w-20" src="Logo.svg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex">
            <div className="dropdown dropdown-end z-10">
              {/* from here */}
              <div>
                {user ? (
                  <div className="flex items-center ">
                    <span className="mr-1 hidden md:block">
                      {displayName ? displayName : email}
                    </span>
                    <div className="avatar online mr-4">
                      <div className="w-10 rounded-full">
                        <img src={photoURL ? photoURL : "/userimg.png"} />
                      </div>
                    </div>
                    <button onClick={handleLogout} className="btn border-none text-white  bg-red-700">
                      Sign out
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="btn bg-gray-700 border-none text-white hover:text-black">
                      Sign In
                    </button>
                  </Link>
                )}
              </div>

            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
