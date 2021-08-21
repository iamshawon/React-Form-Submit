import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("Submit");
    console.log(user);
    e.preventDefault();
  };

  // return Start
  return (
    <div className="formStyle">
      <div>
        <h3>Registration</h3>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder=" Enter your Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder=" Enter your Eamil"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              placeholder=" Enter your Password"
              required
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
