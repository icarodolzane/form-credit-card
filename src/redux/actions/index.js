export const SAVE_CARD = 'SAVE_CARD';

const saveCard = (card) => ({
  type: SAVE_CARD,
  card,
});

export default saveCard;