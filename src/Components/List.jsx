import Profile from "./Profile";
import avatar from "../assets/profile.png";

// Component to display a list of user profiles
function List({ users }) {
  return (
    <div className="container profiles">
      {users.map((user) => (
        <Profile
          key={user.uid}
          avatar={avatar}
          user_name={user.first_name + " " + user.last_name}
          country={user.address.country}
          profession={user.employment.title}
          phone={user.phone_number}
          plan={user.subscription.plan}
        />
      ))}
    </div>
  );
}

export default List;
