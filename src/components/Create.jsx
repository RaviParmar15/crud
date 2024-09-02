import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navaigations = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      name,
      email,
      password,
    };
    axios
      .post("http://localhost:5000/user", obj)
      .then((res) => {})
      .catch((err) => {});
    console.log(obj);
    navaigations("/read")
  };
  return (
    <div>
      <h1>CRUD OPERATIONS</h1>
      <div className="form">
        <form>
          <div>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
              <input className="btn" type="submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
