import React, { useState, useEffect } from 'react';
import Cards from "react-credit-cards-2";
import { Button } from "react-bootstrap";
import "../styles/components/CardPreview.css";

function CardPreview() {

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
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('card'));
    if (cards) {
     setCards(cards);
    }
  }, []);
  return (
      <div className="card-preview-container">
        {
          cards.map((card) =>
          <div className="card-preview" key={card.number}>
            <Cards
              number={card.number}
              expiry={"********"}
              cvc={"***"}
              name={card.name}
            />
            <Button
              variant="danger"
              // onClick={() => deleteCard(card.number)}
            >
              Deletar cartão
            </Button>
          </div>)
        }
      </div>
  );
}
export default CardPreview;
