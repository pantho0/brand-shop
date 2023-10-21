import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";




const Signup = () => {
  const {createUser} = useContext(AuthContext) || {}
  const [regError, setRegError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreateUser = (e) =>{
    e.preventDefault();
    setRegError('')
    setSuccess('')
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{6,}$/.test(password)){
      setRegError('Password should be 6 characters, uppercase, lowercase & special characters')
      return
    }
    console.log(email, password)
    createUser(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error);
    })
    e.target.reset()
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreateUser} className="card-body">
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
                  name = "password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  {regError && <p className="text-red-700">{regError}</p>}
                  {success && <p className="text-green-700">{success}</p>}
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
