import { User } from './User';
import UserCard from './UserCard';
import React, { useState } from 'react';
import UserCard_deleted from './UserCard_deleted';

interface OversiktProps {
  users: User[];
}

function UserOversikt({ users}: OversiktProps) {
  const [userBeingDeleted, setUserBeingDeleted] = useState<User | null>(null);

  const handleDelete = (user: User) => {
    setUserBeingDeleted(user);
    console.log(user);
  }

  return (
    <div className='row'>
      {users.map((user) => (
        <div key={user.username}>
          {user != userBeingDeleted ? (
            
            <UserCard user={user} onDelete={handleDelete} />
            
          ) : (
            <UserCard_deleted user={user}/>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserOversikt;
