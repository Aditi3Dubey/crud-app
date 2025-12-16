import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  let [users, setUsers] = useState([]);
  let [editIndex, setEditIndex] = useState(null);

  const addUser = (name) => {
    setUsers([...users, name]);
  };

  const deleteUser = (index) => {
    const updatedUser = users.filter((_, i) => i !== index);
    setUsers(updatedUser);
  };

  const startEditUser = (index) => {
    setEditIndex(index);
  };

  const updateUser = (name) => {
    const updateUsers = [...users];
    updateUsers[editIndex] = name;
    setUsers(updateUsers);
    setEditIndex(null);
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-32 p-8 max-w-xl min-h-[400px] bg-gradient-to-r from-white/80  to-blue-400 shadow-2xl rounded-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-orange-600 mb-8">
        Simple CRUD App
      </h2>

      <UserForm
        onAddUser={addUser}
        onUpdateUser={updateUser}
        editUser={editIndex !== null ? { name: users[editIndex] } : null}
      />

      <UserList
        users={users}
        onDeleteUser={deleteUser}
        onEditUser={startEditUser}
      />
    </div>
  );
}
