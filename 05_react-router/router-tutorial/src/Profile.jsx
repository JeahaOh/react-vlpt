import React from "react";

const profileData = {
  jeaha: {
    name: "jeaha",
    desc: "Idiot",
  },
  asdf: {
    name: "asdf",
    desc: "anonymous",
  },
};

const Profile = ({ match }) => {
  //  parameter를 받을 땐 match안에 있는 params 값을 참조한다.
  console.log("match : ", match);
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) return <div>Undefined User.</div>;
  return (
    <>
      <div>
        <h3>
          {username} ({profile.name})
        </h3>
        <p>{profile.desc}</p>
      </div>
    </>
  );
};

export default Profile;
