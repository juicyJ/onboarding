import {
  INCREMENT_CARD_IDX,
  DECREMENT_CARD_IDX,
  SET_CARD_ANSWER
} from '../actions/cards';

export default function(state = {index: 0, answers: {}}, action) {
  switch (action.type) {
    case INCREMENT_CARD_IDX: {
      return Object.assign({}, state, {
        index: state.index + 1
      });
    }

    case DECREMENT_CARD_IDX: {
      return Object.assign({}, state, {
        index: state.index - 1
      });
    }

    case SET_CARD_ANSWER: {
      const stateAnswers = state.answers;
      const nextStateAnswers = Object.assign({}, stateAnswers, {
        [action.idx]: Object.assign({}, stateAnswers[action.idx], action.answer)
      });
      return Object.assign({}, state, {
        answers: nextStateAnswers
      });
    }
    default: 
      return state;
  }
};