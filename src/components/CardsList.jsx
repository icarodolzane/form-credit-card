import React, { useEffect } from 'react';
import Cards from "react-credit-cards-2";
import { Button } from "react-bootstrap";
import "../styles/components/CardPreview.css";

function CardsList({allCards, setAllCards}) {

  const deleteCard = (number) => {
    if(allCards){
      const cardsUpdated = allCards.filter((card) => {
        return card.number !== number
      });
      console.log(cardsUpdated);
      localStorage.setItem(
        'card',
        JSON.stringify(cardsUpdated)
      );
      setAllCards(JSON.parse(localStorage.getItem('card')))
    }    
  };

  useEffect(() => {
    console.log(allCards);
  }, [allCards])

  return (
      <div className="card-preview-container">
        {
          allCards.map((card, index) =>
          <div className="card-preview" key={card.number || index}>
            <Cards
              number={card.number || ''}
              expiry={"********"}
              cvc={"***"}
              name={card.name || ''}
            />
            <Button
              variant="danger"
              onClick={() => deleteCard(card.number)}
            >
              Deletar cartão
            </Button>
          </div>)
        }
      </div>
  );
}
export default CardsList;
