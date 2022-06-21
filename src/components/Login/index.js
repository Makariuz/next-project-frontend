import "./Login.scss";
import { AuthContext } from "context";
import { useContext, useState } from "react";

export function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="container">

    <div className="top-wrapper">
    <h1>Next Step</h1>
    </div>
    <div className="middle-wrapper">
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Add Email Address"
      />
      <label htmlFor="Password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Add Password"
      />
      <button className="btn-login btn-blue">Login</button>
    </form>
    </div>
    <div className="bottom-wrapper">
    <article>
Your future in one place, take the <span>  Next Step. </span></article>
    </div>
    
    </div>
  );
}
