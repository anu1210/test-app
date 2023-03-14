import {SET_DATA} from '../Card/card.types';

const initialState = {
    data: [],
};
const Card = (state = initialState, action) =>{
    switch (action.type) {
      case SET_DATA:
        return { ...state, data: action.payload };
        default:
      return state;
  }
}



export default Card;