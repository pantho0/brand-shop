import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
   const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
   const provider = new GoogleAuthProvider();
   const  googleLogin = () => {
        signInWithPopup(auth, provider);
   }

   const logOut = () =>{
     return signOut(auth);
   }

   useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
   },[])
    const userInfo ={
        user,
        createUser,
        signIn,
        googleLogin,
        logOut,
        loading
    }
    return (
     <AuthContext.Provider value={userInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;