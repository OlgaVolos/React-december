import {combineReducers} from "redux";
import counter1Reducer from './counter-one'
import counter2Reducer from './couter-two'

export const reducer = combineReducers({
    counter1: counter1Reducer,
    counter2: counter2Reducer,
})
