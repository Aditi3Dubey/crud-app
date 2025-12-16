import React from "react";
import { X } from "lucide-react";
function UserItem({ user, index, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-center gap-4 ">
      <li className="p-3 bg-white rounded-xl shadow-sm mb-2 min-w-32 w-full text-gray-800 font-medium">
        {user}
       
      </li>
      <div className="flex items-center justify-center gap-1">
      <button
        className="ml-auto p-1 text-white px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        onClick={() => onEdit(index)}
      >
        Edit
      </button>
      <button
        className="ml-auto p-1 text-white px-5 py-3 bg-red-600 hoveyr:bg-red-700 rounded-lg transition-colors"
        onClick={() => onDelete(index)}
      >
        Delete
      </button>
        </div>
    </div>
  );
}

export default UserItem;
