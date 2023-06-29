import { createStore } from 'redux';

const initialState={
    user:{
      data:'',
      isLoading:true,
      logged: false,
      cart: []
    },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return state={ ...state, user: {...state.user,data:action.payload[0],logged: action.payload[1],isLoading:action.payload[2]}};
    case 'FETCH_CART':
      return state={ ...state, user:{...state.user,cart: action.payload}};
    case 'DELETE_CART':
      return state={ ...state, user:{...state.user,cart: [...state.user.cart.slice(0, action.payload),...state.user.cart.slice(action.payload + 1)]}};
    case 'ADD_CART':
      return state={ ...state, user:{...state.user,cart: [...state.user.cart,action.payload]}};
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
