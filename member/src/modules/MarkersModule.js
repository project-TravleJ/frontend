import { createSlice } from '@reduxjs/toolkit';

/** marker 리듀서
 * react-google-map에서 사용하는 데이터를 저장하는 리듀서다.
 * Attraction과 대응되는 데이터이며 속성 명은 google-map api와의 호환때문에
 * attraction의 속성들의 이름을 바꿔준 후 저장한다.
 * */

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
        },
        setMarkersByCourse: (state, action) => {
            const markerList = (action.payload).map(course => {
                return({
                    id:course.attraction.attractionId,
                    name:course.attraction.attractionName,
                    loc: {
                        lat: course.attraction.attractionLat,
                        lng: course.attraction.attractionLng
                    },
                    def: course.attractionDef,
                    idx: course.courseIdx
                });
            })

            return state = markerList;
        }
    },
});

export const { setMarkers, addMarker, setMarkersByCourse } = markers.actions;

export default markers.reducer;