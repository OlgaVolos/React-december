import {
    INC,
    DEC,
    RESET,
    INC_CUSTOM,
    INC_TWO,
    DEC_TWO,
    RESET_TWO,
    INC_CUSTOM_TWO,
} from '../action-types'


const incAction = () => ({type: INC});
const decAction = () => ({type: DEC});
const resetAction = () => ({type: RESET});
const customAction = (payload) => ({type: INC_CUSTOM, payload});
const incActionTwo = () => ({type: INC_TWO});
const decActionTwo = () => ({type: DEC_TWO});
const resetActionTwo = () => ({type: RESET_TWO});
const customActionTwo = (payload) => ({type: INC_CUSTOM_TWO, payload});

export {
    incAction,
        decAction,
        resetAction,
        customAction,
    incActionTwo,
    decActionTwo,
    resetActionTwo,
    customActionTwo,
}
