import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header.js";
import Weoffer from "./components/Weoffer";
import axios from "./axios";
import { useEffect, useState } from "react";

function App() {
  const [db, setdb] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await axios.get("/details").then((response) => {
        setdb(response.data);
      });
    };
    fetch();
  }, []);
  console.table(db);

  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="card_section">{/* <Cards values={db} />; */}</div>
      <div id="cdc" style={{ display: "flex" }}>
        <Cards
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Cards
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Cards
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Cards
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="card_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>{" "}
      <div className="card_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/6c0e09d9-2537-4c2a-9180-4f14e22a1996.jpg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Farm stay hosted by Raajen & Archana."
        />
        <Cards
          title="Luxury art-themed apt:The Post-Impressionist Suite"
          src="https://a0.muscache.com/im/pictures/460b3066-73b3-42d6-bbfa-f70f8d701e59.jpg?im_w=960"
          description="Independent private Entire serviced apartment hosted by Inchara, Neeta & Devika (inc. bfast)."
        />
      </div>
      {/* 
        <Cards
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Cards
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="card_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>{" "}
      <div className="card_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/6c0e09d9-2537-4c2a-9180-4f14e22a1996.jpg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Farm stay hosted by Raajen & Archana."
        />
        <Cards
          title="Luxury art-themed apt:The Post-Impressionist Suite"
          src="https://a0.muscache.com/im/pictures/460b3066-73b3-42d6-bbfa-f70f8d701e59.jpg?im_w=960"
          description="Independent private Entire serviced apartment hosted by Inchara, Neeta & Devika (inc. bfast)."
        />
      </div> */}
      <Weoffer />
      <Footer />
    </div>
  );
}

export default App;
