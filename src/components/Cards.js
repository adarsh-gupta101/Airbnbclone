import React from "react";
import "./Card.css";

function Cards(card) {
  return (
    <>
      <div className="cards">
        <div className="card_item">
          <img className="card_itemImage" src={card.src} />
          <p>{card.title}</p>
          <h5>{card.description}</h5>
          <h3>{card.price}</h3>
        </div>
      </div>

      {/*  {db.map((value) => {
        return (
          <div className="cards">
            <div className="card_item">
            
              <img className="card_itemImage" src={value.src} />
              <p>{value.title}</p>
              <h5>{value.description}</h5>
              <h3>{value.price}</h3>
            </div>
          </div>
        );
      })} */}
    </>
  );
}

export default Cards;
