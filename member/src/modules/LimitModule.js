// import { createActions, handleActions } from "redux-actions";

// const initialState = 7;

// export const LIMIT_FIVE = 'limit/LIMIT_FIVE';
// export const LIMIT_SIX = 'limit/LIMIT_SIX';
// export const LIMIT_SEVEN = 'limit/LIMIT_SEVEN';
// export const LIMIT_EIGHT = 'limit/LIMIT_EIGHT';
// export const LIMIT_NINE = 'limit/LIMIT_NINE';
// export const LIMIT_TEN = 'limit/LIMIT_TEN';

// export const { limitNum: {
//     limitFive, limitSix, limitSeven, limitEight, limitNine, limitTen
// } } = createActions({
//         [LIMIT_FIVE]: (amount = 5) => ({ five: amount }),
//         [LIMIT_SIX]: (amount = 6) => ({ six: amount }),
//         [LIMIT_SEVEN]: (amount = 7) => ({ seven: amount }),
//         [LIMIT_EIGHT]: (amount = 8) => ({ eight: amount }),
//         [LIMIT_NINE]: (amount = 9) => ({ nine: amount }),
//         [LIMIT_TEN]: (amount = 10) => ({ ten: amount })
//     });

// const limitReducer = handleActions(
//     {
//         [LIMIT_FIVE]: (state, { payload: { five } }) => (five),
//         [LIMIT_SIX]: (state, { payload: { six } }) => (six),
//         [LIMIT_SEVEN]: (state, { payload: { seven } }) => (seven),
//         [LIMIT_EIGHT]: (state, { payload: { eight } }) => (eight),
//         [LIMIT_NINE]: (state, { payload: { nine } }) => (nine),
//         [LIMIT_TEN]: (state, { payload: { ten } }) => (ten)
//     },
//     initialState
// );

// export default limitReducer;