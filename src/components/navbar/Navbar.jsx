import "./navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { DarkModeContext } from "../../contexts/darkModeContext";
import { ToggleMenuContext } from "../../contexts/toggleContext";

const Navbar = () => {
  const { dispatchMenu } = useContext(ToggleMenuContext);
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="logo-container-link"
        >
          <span className="logo">React Admin</span>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search...." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon /> <span>EN</span>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <AccountCircleOutlinedIcon />
          </div>
          <div className="item">Hi, Kalyan</div>
          <div className="menubar">
            <MenuIcon
              style={{ fontSize: "30px" }}
              onClick={() => dispatchMenu({ type: "OPENMENU" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
