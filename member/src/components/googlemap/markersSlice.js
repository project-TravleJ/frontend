import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const markerAdapter = createEntityAdapter();

const markersSlice = createSlice({
  name: 'markers',
  initialState: markerAdapter.getInitialState(),
  reducers: {
    removeMarker: markerAdapter.removeOne,
    resetMarkers: markerAdapter.removeAll,
    updateMarker: markerAdapter.updateOne,
  },
});
const initialState = {
    markers: [],
    selectedMarkers: [], // <- selectedMarkers 속성 추가
    // ...
  };
  

export const {
  removeMarker,
  resetMarkers,
  updateMarker,
} = markersSlice.actions;

export const clearMarkers = () => {
    // clearMarkers 함수의 구현
}
    
export default markersSlice.reducer;

export const selectMarkers = (state) => state.markers.selectedMarkers;
export const addMarker = (marker) => {

}
