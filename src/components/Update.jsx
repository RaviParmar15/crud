import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const navaigations = useNavigate();

  useEffect((id, name, email, password) => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/user/${id}`, { id, name, email, password })
      .then((respons) => {})
      .catch(() => {});
  };
  const updatetoread = (e) => {
    navaigations("/read");
  };

  return (
    <div>
      <h1>UPDATIONS </h1>
      <div className="form">
        <form>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={updatetoread}>
              <input className="btn" type="submit" onClick={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
