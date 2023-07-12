import { User } from './User';

interface UserCardProps {
  user: User;
  onDelete: (user: User) => void;
}

function UserCard(props: UserCardProps) {
  const { user, onDelete } = props;

  const deleteClick = (selectedUser: User) => {
      onDelete(selectedUser);
    };

  return (
    <div className='card'>
                    <img src={user.image} alt={user.lName} />
                    <section className="section dark">
                        <h5 className='strong'>
                            <strong>Username: {user.username}</strong>
                        </h5>
                        <p>Name: {user.fName} {user.lName}</p>
                        <p>Password: {user.password}</p>
                        <p>Email: {user.email}</p>
                        <button className="bordered" onClick={() => {deleteClick(user)}}>
                            Delete
                        </button>
                    </section>
      </div>
  );
}

export default UserCard;