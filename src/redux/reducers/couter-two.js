import{
    INC_TWO,
    DEC_TWO,
    RESET_TWO,
    INC_CUSTOM_TWO,
} from '../action-types'
const initialState = {
    counter: 0
}
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_TWO: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case DEC_TWO: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case RESET_TWO: {
            return {
                ...state,
                counter: 0
            }
        }
        case INC_CUSTOM_TWO: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        default:
            console.log('action', action.type, 'does not exist');
            return state;
    }
};
export default reducer
