import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };

    if (email.trim() !== "" && password.trim() !== "") {
      axios
        .post("/login", data)
        .then((result) => {
          localStorage.setItem("token", result.data);
          window.location.href = "/";
        })
        .catch((err) => setError(err.response.data.msg));
      setError("");
    } else {
      setError("Email and password are required.");
    }
  };

  return (
    <div className="col-md-5 col-sm-12 m-auto">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="emailLogin" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailLogin"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordLogin" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="passwordLogin"
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Log In</button>
      </form>
      <p className="text-danger mt-2 fw-semibold">{error ? error : null}</p>
    </div>
  );
}
