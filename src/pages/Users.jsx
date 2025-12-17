import React from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable/UserTable";

export default function Users({ users, setUsers }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              User Management
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your team members efficiently
            </p>
          </div>

          <button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() => navigate("/add-user")}
          >
            + Add User
          </button>
        </div>
        <UserTable users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}
