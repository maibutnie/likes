const initialState = {
    characters: [],
    cart: [],
  };
  
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'CHARACTERS_LOADED':
        return {
          ...state,
          characters: action.payload,
        };
  
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((id) => id !== action.payload),
        };
  
      case 'DELETE_FROM_APP':
        return {
          ...state,
          characters: state.characters.filter((char) => char.id !== action.payload),
        };
  
      default:
        return state;
    }
  }