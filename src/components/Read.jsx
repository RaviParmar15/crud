import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { IoIosAddCircle } from "react-icons/io";
import "./Read.css";
import { Navigate, useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const navaigations = useNavigate();

  const getData = (obj) => {
    axios.get(`http://localhost:5000/user`, obj).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/user/${id}`).then((res) => {
      getData();
    });
  };

  function handleupdate(id,name,email,password) {
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
  }




  const readtoadd = () => {
    navaigations("/create");
  };
  const readtoupdate = () => {
    navaigations("/update");
  };
  return (
    <div>
      <div>
        <button onClick={readtoadd} className="btn-add">
          ADD
        </button>
      </div>

      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Functionality</th>
        </tr>
      </thead>
      {data.map((e, id) => {
        return (
          <div className="box" key={id}>
            <tbody>
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <button
                  style={{ borderRadius: "100%" }}
                  onClick={() => handleDelete(e.id)}
                >
                  <MdDeleteForever />
                </button>
                <button
                  onClick={() =>
                    handleupdate(e.id, e.name, e.email, e.password)
                  }
                  className="btn1"
                  style={{ borderRadius: "100%" }}
                >
                  <RxUpdate  onClick={readtoupdate}/>
                </button>
              </tr>
            </tbody>
          </div>
        );
      })}
    </div>
  );
};

export default Read;
