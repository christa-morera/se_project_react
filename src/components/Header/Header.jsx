import { NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import defaultAvatar from "../../assets/avatar-default.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const avatarSrc = avatar || defaultAvatar;

  return (
    <header className="header">
      <NavLink className="header__logo-home-link" to="/">
        <img src={logo} className="header__logo" alt="WTWR logo"></img>
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        type="button"
        onClick={onAddClick}
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <NavLink className="header__user-profile-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img
            className="header__avatar"
            src={avatarSrc}
            alt="Terrence Tegegne"
          ></img>
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
