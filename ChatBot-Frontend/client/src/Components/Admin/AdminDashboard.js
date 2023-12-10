// AdminDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { getAllUsers, removeUser } from "../../Helper/apicaller";
import { signout } from "../../Helper/auth";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [supportAgents, setSupportAgents] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  };

  const Logout = () => {
    signout();
    return (window.location.href = "/signin");
  };

  const handleRemoveUser = (userId) => {
    removeUser(userId).then((data) => {
      console.log(data);
      fetchUsers();
    });
    console.log(`Remove user with ID: ${userId}`);
  };

  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2">Admin Dashboard</h1>
        <button className="btn btn-outline-danger" onClick={Logout}>
          Logout
        </button>
      </header>

      <div className="row ">
        <div className="col-md-6 ">
          <h2 className="h4 mb-3">Users</h2>
          <div className="usercontainer">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, id) => (
                  <tr key={id}>
                    {user.id != 5 && (
                      <>
                        <td>{user.username}</td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleRemoveUser(user.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="h4 mb-3">Support Agents</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* {supportAgents.map((agent) => (
                <tr key={agent.id}>
                  <td>{agent.name}</td>
                  <td>
                    <span
                      className={`badge ${
                        agent.status === "active" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {agent.status}
                    </span>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
          <p className="text-center">No Support Agent Found...</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
