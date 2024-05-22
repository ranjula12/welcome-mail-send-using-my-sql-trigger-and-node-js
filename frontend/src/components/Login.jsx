import { useState } from "react";
import { Link } from "react-router-dom";
import validation from "../controllers/loginValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    console.log(!Object.keys(errors).length);

    if (!Object.keys(errors).length) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/home");
          } else {
            alert("no record exits");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Log In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              onChange={handleInput}
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
            ></input>
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              onChange={handleInput}
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
            ></input>
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Lon in
          </button>
          <p>You are agree to our term and policies</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
