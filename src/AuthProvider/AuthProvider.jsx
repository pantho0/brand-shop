import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
   const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }
    const userInfo ={
        createUser,
        signIn
    }
    return (
     <AuthContext.Provider value={userInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;