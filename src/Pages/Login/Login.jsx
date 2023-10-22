/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {signIn, googleLogin} = useContext(AuthContext)
  const [errorLogin, setErrorLogin] = useState("");
  const handleGoogle = () =>{
    googleLogin()
 }
  const handleSignIn = e =>{
    e.preventDefault()
    setErrorLogin("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result =>{
      console.log(result.user);

    })
    .catch(error => {
      console.log(error);
      setErrorLogin('Invalid Credentials')
    })

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                {errorLogin && (
                    <p className="text-red-700 font-semibold">{errorLogin}</p>
                  )}
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
               <div className="text-center">  
               <p className="mt-4">Don't have an account? <span className="text-blue-600 font-medium"><Link to={'/signup'}>Register</Link></span> here. </p>
               </div>
              </div>
              <div className="flex justify-center items-center">
              <div><p className="font-medium">Login with</p></div>
              <div><FcGoogle className="text-3xl cursor-pointer" onClick={handleGoogle}></FcGoogle></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
