import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const handleneagtive = () => {
    navigate(`/register`);
  };
  const handleFrom = (event) => {
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
  };
  return (
    <div className="register-from">
      <h1 className="text-center text-info mt-3">This is a Register</h1>

      <form onSubmit={handleFrom}>
        <input type="text" name="name" id="" placeholder="your name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="your email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="your password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        All Ready Have And Account And Login?
        <Link
          to="/login"
          onClick={handleneagtive}
          className="text-danger  text-decoration-none"
        >
          Login Now
        </Link>
      </p>
    </div>
  );
};

export default Register;
