import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const SignOut = () => {
   const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
  };
    return (
    <div>
      <button onClick={handleLogout}>Logout</button>;
    </div>
  )
}

export default SignOut
