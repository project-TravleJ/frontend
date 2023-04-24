import {createSlice} from "@reduxjs/toolkit";


const initialState =[
    {
        attractionId: 0,
        attractionName: "",
        attractionLat: 0.0,
        attractionLng: 0.0,
        attractionDef: ""
    }
]

const attractions = createSlice({
    name: "attractions",
    initialState: initialState,
    reducers: {
        setAttractions: (state, action) => {
            return state = action.payload;
        } ,
        resetAttractions: (state) => {
            return state = initialState;
        }
    }
})

export const {
    setAttractions,
    resetAttractions
} = attractions.actions;

export default attractions.reducer;