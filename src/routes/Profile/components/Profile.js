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
    <div className="app">
      {isValid ? (
        <section className="section">
          <header className="title">
            welcome to the your profile page, {user.name}!
          </header>
          <div>
            <p>currently signed in as:: {user.email}</p>
          </div>
        </section>
      ) : (
        <section>
          <p>cannot authenticate!</p>
        </section>
      )}

      <section className="section">
        <div className="buttons">
          <button className="button is-link is-primary" type="button">
            <a href="/" style={{ color: "#fff" }}>
              Home
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
