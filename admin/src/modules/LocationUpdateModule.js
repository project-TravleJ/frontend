import { createActions, handleActions} from 'redux-actions';

const initailState = [{
    attractionId: "",
    attractionName: "",
    attractionLat: "",
    attractionLng: "",
    attractionDef: ""
},
];

export const PUT_LOCATION = 'location/PUT_LOCATION';

const actions = createActions({
    [PUT_LOCATION]: () => {}
});

const updateLocationReducer = handleActions(
    {
        [PUT_LOCATION]: (state, {payload}) => {

            return payload;
        }
    },
    initailState
);

export default updateLocationReducer;