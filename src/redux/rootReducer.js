import { combineReducers } from 'redux';
import Card from './Card/card.reducers';


    const rootReducer = combineReducers({

        continent: Card,

    });
export default rootReducer;