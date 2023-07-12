import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
}

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const UserDeletedCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>User has been deleted.</p>
    </div>
  );
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' },
  ]);
  const [deletedUserId, setDeletedUserId] = useState<number | null>(null);

  const handleDeleteUser = (userId: number) => {
    setDeletedUserId(userId);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user.id}>
          {deletedUserId === user.id ? (
            <UserDeletedCard user={user} />
          ) : (
            <UserCard user={user} onDelete={handleDeleteUser} />
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
