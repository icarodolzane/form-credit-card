import React, { useState } from 'react';
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import "../styles/components/AddCardForm.css";
import { Button} from 'react-bootstrap'
import InputMask from 'react-input-mask';

export default function AddCardForm() {
  const [card, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const formatDate = (evt) => {
    console.log('');
  };

  const placeholders = {
    name: 'SEU NOME AQUI',
    expiry: 'validade'
  }

  return (
    <section className="main-container">
      <div className="form-frame">
        <h2>Adicionar um cartão de crédito</h2>
        <div>
          <label htmlFor="number">
            Número do cartão
            <input
              autoComplete="off"
              type="number"
              name="number"
              id="number"
              placeholder="Número do cartão"
              value={card.number}
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
              className="card-input"
            />
          </label>
          <label htmlFor="card-name">
            Nome no cartão
            <input
              autoComplete="off"
              type="text"
              name="name"
              id="name" 
              placeholder="Nome no cartão"
              value={card.name}
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
              className="card-input"
            />
          </label>
          <label htmlFor="expiry">
            Data de expiração
            <input
              autoComplete="off"
              type="text"
              name="expiry"
              id="expiry"
              placeholder="MM/AA"
              value={card.expiry}
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
              className="card-input"
              onKeyUp={formatDate}
              maxLength="4"
          />
          </label>
          <label className="card-cvc" htmlFor="cvc">
            <span>Código de segurança (CVV)</span>
            <input
              autoComplete="off"
              type="text"
              name="cvc"
              id="cvc"
              placeholder="CVC"
              value={card.cvc}
              onChange={ handleInputChange }
              onFocus={ handleInputFocus }
              className="card-cvc"
            />
          </label>
        </div>
      </div>
      <div id="AddCardForm" className="card-preview">
      <Cards
        number={card.number}
        expiry={card.expiry}
        cvc={card.cvc}
        name={card.name}
        focused={card.focus}
        placeholders={placeholders}
      />
      <Button variant="success">Adicionar Cartão</Button>{' '}
      </div>
    </section>
  );
}
