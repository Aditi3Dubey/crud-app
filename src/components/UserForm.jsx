import React, { useState, useEffect } from "react";

export default function UserForm({ onAddUser, onUpdateUser, editUser }) {
  let [name, setName] = useState("");

  // Fill input when edit button clicked
  useEffect(() => {
    if (editUser !== null) {
      setName(editUser.name);
    }
  }, [editUser]);

  const handleSubmit = () => {
    if (name === "") return;
    onAddUser(name);
    if (editUser === null) {
      onAddUser(name);
    } else {
      onUpdateUser(name);
    }
    setName("");
  };

  return (
    <div className="flex items-center justify-center gap-4 w-full max-w-sm mb-6">
      <input
        className="flex-grow p-3 border-2 border-blue-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-600 bg-white placeholder-gray-400"
        type="text"
        value={name}
        placeholder="Enter your name here.."
        onChange={(e) => setName(e.target.value)}
      ></input>

      <button
        className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        onClick={handleSubmit}
      >
        {editUser === null ? "Add" : "Update"}
      </button>
    </div>
  );
}
