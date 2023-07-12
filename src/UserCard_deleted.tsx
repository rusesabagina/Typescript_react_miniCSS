import { User } from './User';

interface UserCard_deletedProps {
  user: User;
}

function UserCard_deleted(props: UserCard_deletedProps){
  const { user} = props;

  return (
    <div className='card'>
      <img src={user.image} alt={user.lName} />
      <section className="section dark">
      <strong>User {user.username} have been deleted!</strong>
      </section>
      </div>
  );
}

export default UserCard_deleted;