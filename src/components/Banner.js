import { TextField } from "@material-ui/core";
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_book">
        <h2>Vacation rentals in India</h2>
        <p>Find and book unique accommodation on Airbnb</p>

        <TextField id="standard-basic" label="Location" />
        <div className="date">
          {" "}
          <label for="from">From</label>
          <input type="date" id="from" placeholder="Add Date" />
          <label for="fto">To</label>
          <input type="date" id="to" placeholder="Add Date" />
        </div>
        <div className="adchild">
          <TextField
            id="standard-number"
            label="Adults"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-number"
            label="Childrens"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <button>Search</button>
      </div>
      <img
        className="banner_image"
        src="https://a0.muscache.com/im/pictures/5998210c-3dd8-456a-8805-2a044ede1d5e.jpg?im_w=1680"
      />
    </div>
  );
}

export default Banner;
