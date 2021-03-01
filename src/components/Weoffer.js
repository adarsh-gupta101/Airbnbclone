import React from "react";
import KitchenIcon from "@material-ui/icons/Kitchen";
import WifiIcon from "@material-ui/icons/Wifi";
import PoolIcon from "@material-ui/icons/Pool";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import "./Weoffer.css";

function Weoffer() {
  return (
    <div>
      <h6>We offers</h6>
      <div className="weoffer">
        <div className="offer">
          <KitchenIcon />
          <p>Kitchen</p>
        </div>
        <div className="offer">
          {" "}
          <WifiIcon />
          <p>Wifi</p>
        </div>
        <div className="offer">
          {" "}
          <PoolIcon />
          <p>Pool</p>
        </div>
        <div className="offer">
          {" "}
          <LocalParkingIcon />
          <p>Parking</p>
        </div>
      </div>
    </div>
  );
}

export default Weoffer;
