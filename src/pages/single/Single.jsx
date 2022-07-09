import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import BasicTable from "../../components/basicTable/BasicTable";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="item-details">
                <div className="name">Jane Doe</div>
                <div className="email">JaneDoe@gmail.com</div>
                <div className="phone">+1 234 567 89</div>
                <div className="address">Jane Doe st, NewYork</div>
                <div className="country">USA</div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspectRatio={3 / 1} title="User spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
