import { createSlice } from '@reduxjs/toolkit';

const initialState = 
        [
        {
            id: 1,
            name: 'Marker 1',
            latitude: 37,
            longitude: 126,
        },
        {
            id: 2,
            name : 'Marker 2',
            latitude: 37,
            longitude: 126,
        },
        {
            id: 3,
            name: 'Marker 3',
            latitude: 37,
            longitude: 126,
        },
    ];




const markersReducer = createSlice ({

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

export const { setMarkers, addMarker } = markersReducer.actions;

export default markersReducer;