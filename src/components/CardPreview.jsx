// import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Cards from "react-credit-cards-2";
import { Button } from "react-bootstrap";
import "../styles/components/CardPreview.css";

function CardPreview({number, name}) {

  // const deleteCard = (number) => {
  //   if(cards){
  //     const cardsUpdated = cards.filter((card) => card.number !== number);
  //     localStorage.removeItem('card');
  //     localStorage.setItem(
  //       'card',
  //       JSON.stringify([...JSON.parse(localStorage.getItem('card')), 
  //       cardsUpdated
  //       ])
  //     );  
  //   }    
  // };
  return (
      <div className="card-preview-container">
        {
           number && name ?
           <div className="card-preview">
            <Cards
              number={number}
              expiry={"********"}
              cvc={"***"}
              name={name}
            />
            <Button
              variant="danger"
              // onClick={() => deleteCard(card.number)}
            >
              Deletar cartão
            </Button>
        </div> : null 
        }
        {/* {
          cards.map((card) =>
          <div className="card-preview" key={card.number}>
            <Cards
              number={card.number}
              expiry={"********"}
              cvc={"***"}
              name={card.name}
              focused={card.focus}
            />
            <Button
              variant="danger"
              // onClick={() => deleteCard(card.number)}
            >
              Deletar cartão
            </Button>
          </div>)
        } */}
      </div>
  );
}
const mapStateToProps = (globalState) => ({
  number: globalState.card.number,
  // cardType: globalState.card.cardType,
  name: globalState.card.name,
});
export default connect(mapStateToProps)(CardPreview);
