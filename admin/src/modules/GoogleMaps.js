
const initialState = {
    markers: [
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
    ],
};


const markersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MARKERS':
            return action.markers;
        default:
            return state;    
    }
};

export const setMarkers = (markers) => ({
    type: 'SET_MARKERS',
    markers,
});

export default markersReducer;

