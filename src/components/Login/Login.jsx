import React from 'react'
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import { auth } from "../../firebase"; // make sure firebase.js is configured
// import AdminPortal from '../AdminPortal/AdminPortal';
import Products from '../products/Products';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            // alert("Admin logged in successfully!");
            // you can navigate to dashboard here
            navigate("/products");
        }
        catch (error) {
            console.error("Invalid credentials. Please try again.",error.code,error.message);
        alert(error.message)
        }
    };
    const pageStyle = {
        background: "636363",
        background: "radial-gradient(circle, rgba(0, 0, 0, 1)0%, rgba(148, 187, 233, 1) 100%)",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        color: "white",
    }
    return (
        <div style={pageStyle}>
            <div
                className="container p-4"
                style={{
                    maxWidth: 400,
                    border: "2px solid rgb(255, 255, 255)",
                    backdropFilter: "blur(30px)",
                    boxShadow: "0px 0px 30px rgba(227,228,237,0.37)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: 10
                }}
            >
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                            aria-placeholder="Your E-Mail"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text text-light">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                            aria-placeholder="Enter Your Password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e)=>SetPassword(e.target.value)}
                        />
                    </div>
                    {/* <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div> */}
                    <button type="submit" className="btn btn-primary w-50">
                        Login
                    </button>
                    {/* <p style={{ marginBottom: 5 }}>or create an account</p>
    <button type="submit" className="btn btn-primary w-50" id="signUp">
      SignUp
    </button> */}
                </form>
            </div>

        </div>
    )
}

export default Login
