"use client";

import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"; // these are the functions provided by auth of firebase
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataObj, setUserDataObj] = useState(null);
  const [loading, setLoading] = useState(true);

  //AUTH HANDLERS
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password); //firebase function
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password); //firebase function
  }
  function logout() {
    setUserDataObj(null);
    setCurrentUser(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // create a listener that listens for auth changes in our component
      try {
        //set the user to our local context state
        setLoading(true);
        setCurrentUser(user);
        if (!user) {
          console.log("No User Found");
          return; // if user do not exist
        }
        //if user exists, fetch data from firestore database
        console.log("Fetching User Data");
        const docRef = doc(db, "users", user.uid); // we have created a web application
        const docSnap = await getDoc(docRef);
        let firebaseData = {};
        if (docSnap.exists()) {
          console.log("found user data");
          firebaseData = docSnap.data();
          console.log(firebaseData);
        }
        setUserDataObj(firebaseData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }); //listens for authenticaition state changes its a firebase function
    return unsubscribe; // clean up
  }, []);

  const value = {
    currentUser,
    userDataObj,
    setUserDataObj,
    signup,
    logout,
    login,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
