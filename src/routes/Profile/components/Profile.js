import React, { useMemo } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Profile = () => {
  const { id = "" } = useParams();
  const user = useSelector((state) => state.user);

  const isValid = useMemo(() => {
    return id && user.name === id && user.email;
  }, [user, id]);

  return (
    <section>
      {isValid ? (
        <>
          <header>welcome to the your profile page, {user.name}!</header>
          <div>
            <p>currently signed in as:: {user.email}</p>
          </div>
        </>
      ) : (
        <section>
          <p>cannot authenticate!</p>
        </section>
      )}

      <div>
        <button className="button" type="button">
          <a href="/">Home</a>
        </button>
      </div>
    </section>
  );
};

export default Profile;
