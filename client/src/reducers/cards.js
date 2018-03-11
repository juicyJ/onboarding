export default function(state = {}, action) {
  switch (action.type) {
    case 'increment': {
      return {
        idx: 3
      };
    }

    default: 
      return state;
  }
}
