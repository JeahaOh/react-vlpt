import React from "react";

const profileData = {
  asdf: {
    name: "asdf",
    desc: "easy keyword to type.",
  },
  anon: {
    name: "anonymous",
    desc: "no name",
  },
};

// match : route 컴포넌트에서 넣어주는 props
const Profiles = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>Not Exist User.</div>;
  } else
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

export default Profiles;
