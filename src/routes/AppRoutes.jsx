import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";

export default function AppRoutes() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Aditi", lastName: "Dubey", age: 21 },
    { id: 2, firstName: "Ravi", lastName: "Shukla", age: 25 },
    { id: 3, firstName: "Neha", lastName: "Verma", age: 23 },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Users users={users} setUsers={setUsers} />} />
      <Route
        path="/users"
        element={<Users users={users} setUsers={setUsers} />}
      />
      <Route path="/add-user" element={<AddUser setUsers={setUsers} />} />
      <Route
        path="/edit-user/:id"
        element={<EditUser users={users} setUsers={setUsers} />}
      />
    </Routes>
  );
}
