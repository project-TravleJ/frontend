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
        }
    },
});

export const {setAtt, resetAtt} = selectAttraction.actions;

export default selectAttraction.reducer;

public void String ajh