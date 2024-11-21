import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)

const Provider = ({ children }) => {
    const [user, setUser] = useState()

    const register = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)

    }
    const updateUser = (userinfo) => {
        return updateProfile(auth.currentUser, userinfo)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const value = { register, updateUser, user }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;