import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import defaultAvatar from "../../assets/avatar-default.png";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const avatarSrc = avatar || defaultAvatar;

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="WTWR logo"></img>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        type="button"
        onClick={onAddClick}
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          className="header__avatar"
          src={avatarSrc}
          alt="Terrence Tegegne"
        ></img>
      </div>
    </header>
  );
}

export default Header;
