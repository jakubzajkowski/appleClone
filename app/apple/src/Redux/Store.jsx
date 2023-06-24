import { createStore } from 'redux';

const initialState={
    user:{
      data:'',
      isLoading:true,
      logged: '',
      cart: ''
    },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return state={ ...state, user: {...state.user,data:action.payload[0],logged: action.payload[1],isLoading:action.payload[2]}};
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;