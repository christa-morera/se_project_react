import "./SideBar.css";
import avatar from "../../../src/assets/avatar.png";
import defaultAvatar from "../../../src/assets/avatar-default.png";

function SideBar() {
  const avatarSrc = avatar || defaultAvatar;

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img
          src={avatarSrc}
          className="sidebar__avatar"
          alt="Terrence Tegegne"
        ></img>
        <p className="sidebar__user-name">Terrence Tegegne</p>
      </div>
    </aside>
  );
}

export default SideBar;
