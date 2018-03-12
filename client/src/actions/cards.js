export const INCREMENT_CARD_IDX = 'INCREMENT_CARD_IDX';
export const DECREMENT_CARD_IDX = 'DECREMENT_CARD_IDX';
export const SET_CARD_ANSWER = 'SET_CARD_ANSWER';
export const SET_ESTIMATED_SAVINGS = 'SET_ESTIMATED_SAVINGS';

export function incrementCardIdx() {
  return { type: INCREMENT_CARD_IDX };
};

export function decrementCardIdx() {
  return { type: DECREMENT_CARD_IDX };
};

export function setCardAnswer(idx, answer) {
  return { type: SET_CARD_ANSWER, idx: idx, answer: answer};
};

export function setEstimatedSavings(amount) {
  return { type: SET_ESTIMATED_SAVINGS, amount: amount};
};