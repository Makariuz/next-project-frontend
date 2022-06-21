import  "./Signup.scss";
import { useState, useContext } from "react";
import { AuthContext } from "context";

export function Signup() {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(firstName, lastName, email, password);
  };

  return (
    <div className="container">
      <div className="top-wrapper">
      <h1>Create Account</h1>
      </div>
      <div className="middle-wrapper">

      <form className="signup-form" onSubmit={handleSubmit}>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        placeholder="Insert First Name"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        placeholder="Insert Last Name"
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Add Email Address"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Create Password"
      />
      <button className="btn-blue btn-signup">Sign Up!</button>
    </form>
      </div>
      <div className="bottom-wrapper">
      <article>
Your future in one place, take the <span>  Next Step. </span></article>
      </div>
    </div>
    
  );
}
