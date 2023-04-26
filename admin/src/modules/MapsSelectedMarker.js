import { createSlice } from '@reduxjs/toolkit';

const initState = {
    "id":"",
    "name":"",
    "loc":{
        "lat":0.0,
        "lng": 0.0
    },
    "def":""
};

const selectAttraction  = createSlice({
    name: 'selectAttraction',
    initialState : initState,
    reducers: {
        setAtt: (state, action) => {
            console.log(action.payload);
            return state = action.payload;
        },
        resetAtt: (state) => {
            return state = initState;
        },
        modifyName: (state, action) => {
            state.name = action.payload;
        },
        modifyDef: (state, action) => {
            state.def = action.payload;
        },
    },
});

export const {setAtt, resetAtt, modifyName, modifyDef} = selectAttraction.actions;

export default selectAttraction.reducer;
