import { createSlice } from '@reduxjs/toolkit';

const initialState =
    [
        {
            "id":"",
            "name":"",
            "loc":{
                "lat":0.0,
                "lng": 0.0
            },
            "def":""
        }
    ];




const markers = createSlice ({
    name : 'marker',
    initialState : initialState,
    reducers:{
        setMarkers: (state, action) => {
            console.log(action.payload);
            const markerList = (action.payload).map(att => {
                return {
                    id: att.attractionId,
                    name: att.attractionName,
                    loc: {
                        lat: att.attractionLat,
                        lng: att.attractionLng
                    },
                    def:att.attractionDef
                }

            })

            console.log(markerList);
            return state = markerList;
        },
        addMarker: (state, action) => {
            state = state.push(action.payload)
        }
    },
});

export const { setMarkers, addMarker } = markers.actions;

export default markers.reducer;