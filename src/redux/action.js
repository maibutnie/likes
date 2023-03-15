export const loadCharacters = () => async (dispatch) => {
  try {
    const response = await fetch('https://finalspaceapi.com/api/v0/character/');
    const data = await response.json();
    
    dispatch({ 
      type: 'CHARACTERS_LOADED',
      payload: data 
    });
  } catch (error) {
    console.log(error);
  }
}

export const addToCart = (id) => ({ type: 'ADD_TO_CART', payload: id });

export const removeFromCart = (id) => ({ type: 'REMOVE_FROM_CART', payload: id });

export const deleteFromApp = (id) => ({ type: 'DELETE_FROM_APP', payload: id });