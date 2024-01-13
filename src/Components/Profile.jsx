
// Component for an individual user profile
function Profile({ avatar, user_name, phone, profession, country, plan }) {
  return (
    <div className="profile">
      <img src={avatar} alt={user_name} />
      <div>
        <p>
          I am {user_name} from {country}
        </p>
        <p>My profession is {profession}</p>
        <p>You can contact me at {phone}</p>
        <p>
          I have <b>{plan}</b> plan
        </p>
      </div>
    </div>
  );
}

export default Profile;
