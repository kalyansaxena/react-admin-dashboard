import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/darkModeContext";
import { Link } from "react-router-dom";
import { ToggleMenuContext } from "../../contexts/toggleContext";

const Home = () => {
  const { toggleMenu, dispatchMenu } = useContext(ToggleMenuContext);
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspectRatio={2 / 0.85} title="Last 6 months (Revenue)" />
        </div>
      </div>
      {toggleMenu ? (
        <div className="menu-container">
          <div className="top">
            <span
              className="close-menu"
              onClick={() => dispatchMenu({ type: "CLOSEMENU" })}
            >
              <CloseIcon />
            </span>
          </div>
          <div className="center">
            <ul>
              <p className="title main">MAIN</p>
              <Link
                to="/react-admin-dashboard"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li>
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
                </li>
              </Link>
              <p className="title">LISTS</p>
              <Link
                to="/react-admin-dashboard/users"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li>
                  <PeopleIcon className="icon" />
                  <span>Users</span>
                </li>
              </Link>
              <li>
                <StoreIcon className="icon" />
                <span>Products</span>
              </li>
              <li>
                <CreditCardIcon className="icon" />
                <span>Orders</span>
              </li>
              <p className="title">USEFUL</p>
              <li>
                <LocalShippingIcon className="icon" />
                <span>Delivery</span>
              </li>
              <li>
                <InsertChartIcon className="icon" />
                <span>Stats</span>
              </li>
              <li>
                <NotificationsNoneIcon className="icon" />
                <span>Notifications</span>
              </li>
              <p className="title">SERVICES</p>
              <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                <span>System Health</span>
              </li>
              <li>
                <PsychologyOutlinedIcon className="icon" />
                <span>Logs</span>
              </li>
              <li>
                <SettingsApplicationsIcon className="icon" />
                <span>Settings</span>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <div
              className="colorOption"
              onClick={() => dispatch({ type: "DARK" })}
            ></div>
            <div
              className="colorOption"
              onClick={() => dispatch({ type: "LIGHT" })}
            ></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
