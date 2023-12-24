import React from "react";

export default function SignupForm() {
  return (
    <div className="col-md-5 col-sm-12 mb-3">
      <h2>Sign up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            autoComplete="on"
          />
        </div>
        <button className="btn btn-primary">Sign up</button>
      </form>
    </div>
  );
}
