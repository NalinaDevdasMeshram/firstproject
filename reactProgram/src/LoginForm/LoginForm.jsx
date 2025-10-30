import { useState } from "react";
import "./LoginForm.css";
const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setConfirmpassword("");
  };
  return (
    <div className="container">
      <button
        className={isLogin ? "active" : ""}
        onClick={() => setIsLogin(true)}
      >
        Login
      </button>
      <button
        className={!isLogin ? "active" : ""}
        onClick={() => setIsLogin(false)}
      >
        Sign up
      </button>
      <form onSubmit={handleSubmit}>
        {isLogin ? (
          <div className="loginForm">
            <h3>Login Form</h3>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <a href="#" onClick={() => setPassword(true)}>
              {" "}
              Forget password
            </a>

            <p>
              Member a now ?
              <a href="#" onClick={() => setIsLogin(false)}>
                SignUp Now
              </a>
            </p>
          </div>
        ) : (
          <div className="Signup">
            <h3>Sign up Form</h3>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
            <button type="submit">Sign up</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
