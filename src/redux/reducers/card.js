import { SAVE_CARD } from '../actions';

const INITIAL_STATE = {
  number: "",
  cardType: "",
  name: "",
};

const saveCard = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case SAVE_CARD:
    return {
      ...state,
      cards: action.payload,
    };

  default:
    return state;
  }
}

export default saveCard;