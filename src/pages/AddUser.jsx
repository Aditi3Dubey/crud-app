import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm/UserForm";

export default function AddUser({ setUsers }) {
  const navigate = useNavigate();

  const handleAddUser = (formData) => {
    setUsers((prevUsers) =>{
      const newId = 
      prevUsers.length > 0 
      ? prevUsers[prevUsers.length-1].id +1
      : 1;
      return   [...prevUsers, { id:newId, ...formData }];
      
    } );
      navigate("/users"); // go back after adding
   
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
            Add New User
          </h1>
          <p className="text-gray-600 mt-1">Create a new team member profile</p>
        </div>
        <UserForm
          onSubmit={(formData) => {
            handleAddUser(formData);
            navigate("/users");
          }}
        />
      </div>
    </div>
  );
}
