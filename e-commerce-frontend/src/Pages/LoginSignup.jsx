import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({username:"",email:"",password:""});

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token',data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token',data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler}/>
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
        </div>

        <button className="btn" onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

        {state==="Login"?
        <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        :<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
