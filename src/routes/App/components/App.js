import React, { useMemo, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../styles/_app.scss";
import { useStorage } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleThemeAction,
  updateUserAction,
} from "../../../common/actions/actions";

function App() {
  const isDarkValue = useSelector((state) => state.isDark);
  const userValue = useSelector((state) => state.user);

  const dispatcher = useDispatch();

  const [, updateIsDark] = useStorage("THEME", isDarkValue);
  const [, setUser] = useStorage("USER", userValue);

  const handleChangeTheme = () => dispatcher(toggleThemeAction());

  const saveUserData = () => {
    setUser(userValue);
  };

  useEffect(() => {
    updateIsDark(isDarkValue);
  }, [isDarkValue]);

  const handleUserInput = (e) => {
    const updatedvalue = {
      ...userValue,
      [e.target.name]: e.target.value,
    };
    dispatcher(updateUserAction(updatedvalue));
  };

  const validInput = useMemo(
    () => userValue.name && userValue.email,
    [userValue]
  );

  useEffect(() => {
    if (isDarkValue) {
      document.querySelector("html").classList.add("dark-mode");
    } else {
      document.querySelector("html").classList.remove("dark-mode");
    }
  }, [isDarkValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (validInput) return;
    window.location.href = `/profile/${userValue.name}`;
  };

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button
          className="app__dark-mode-btn icon level-right"
          onClick={handleChangeTheme}
        >
          <FontAwesomeIcon
            title={`change to ${isDarkValue ? "light" : "dark"} theme`}
            icon={!isDarkValue ? faMoon : faSun}
            color={!isDarkValue ? "" : "#FFA500"}
          />
        </button>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className="input"
            name="name"
            value={userValue.name || ""}
            type="text"
            placeholder="Name"
            onChange={handleUserInput}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className="input"
            name="email"
            value={userValue.email || ""}
            type="text"
            placeholder="Email"
            onChange={handleUserInput}
          />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <button
            className="button is-primary"
            onClick={saveUserData}
            type="button"
          >
            Save
          </button>
          <button
            className={`button is-link ${!validInput && "disabled"}`}
            onClick={onSubmit}
            type="button"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
