import { Link } from "react-router-dom";
import { useState } from "react";
import validation from "../controllers/signupValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
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
    console.log(values);
    setErrors(validation(values));
    console.log(errors);

    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              onChange={handleInput}
              type="text"
              name="name"
              placeholder="Enter Name"
              className="form-control rounded-0"
            ></input>
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
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
            Sign Up
          </button>
          <p>You are alredy have an account</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
