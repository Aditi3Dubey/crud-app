import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserTable({ users, setUsers }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl overflow-hidden border border-blue-100">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-bold text-white tracking-wide">
              First Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-white tracking-wide">
              Last Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-white tracking-wide">
              Age
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-white tracking-wide">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-blue-100">
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-blue-50 transition-all duration-200"
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-800">
                {user.firstName}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-800">
                {user.lastName}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-800">
                {user.age}
              </td>
              <td className="px-6 py-4 text-sm space-x-3">
                <button
                  onClick={() => navigate(`/edit-user/${user.id}`)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    setUsers(users.filter((u) => u.id !== user.id))
                  }
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-lg hover:from-red-600 hover:to-red-700 font-medium shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
