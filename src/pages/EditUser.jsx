import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm/UserForm";

export default function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedUser = users.find((user) => user.id === Number(id));

  const handleUpdateUser = (formData) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === selectedUser.id ? { ...u, ...formData } : u
      )
    );
    navigate("/users"); // go back after updating
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="p-8 max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/users")}
          className="mb-6 bg-white px-4 py-2 rounded-lg text-blue-600 hover:text-blue-700 font-semibold shadow-md hover:shadow-lg transition-all duration-200 border border-blue-200"
        >
          ← Back to Users
        </button>
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Edit User
          </h1>
          <p className="text-gray-600 mt-1">Update user information</p>
        </div>
        <UserForm user={selectedUser} onSubmit={handleUpdateUser} />
      </div>
    </div>
  );
}
