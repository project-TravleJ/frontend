import {createActions, handleActions } from 'redux-actions';

const initailState = [
    {
        attrationId:"",
        attrationName:"",
        attrationLat:0.0,
        attrationLng:0.0,
        attrationDef:""
    },
];

export const DELETE_LOCATION = 'location/DELETE_LOCATION';

const actions = createActions({
    [DELETE_LOCATION]: () => {}
});

const locationReducer = handleActions(
    {
        [DELETE_LOCATION]:(state, { payload }) => {

            return payload;
        }
    },
    initailState
);

export default locationReducer;

