import { createSlice } from '@reduxjs/toolkit';

const initialState = 
        [
            {
                "id":"",
                "name":"",
                "loc":{
                    "lat":0.0, 
                    "lng": 0.0
                }
            }
        ];




const markers = createSlice ({
    name : 'marker',
    initialState : initialState,
    reducers:{
        setMarkers: (state, action) => {
            return state = action.payload;
        },
        addMarker: (state, action) => {
            state = state.push(action.payload)
        }
    },
});

export const { setMarkers, addMarker } = markers.actions;

export default markers.reducer;