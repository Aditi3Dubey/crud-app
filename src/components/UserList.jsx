import UserItem from "./UserItem";

function UserList({ users, onDeleteUser ,onEditUser }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-4 self-start pl-4">User List</h3>

      <ul className="w-full max-w-sm">
        {users.map((user, index) => (
          <UserItem
            key={index}
            user={user}
            index={index}
            onDelete={onDeleteUser}
            onEdit = {onEditUser}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
