import { createEntityAdapter } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = markerAdapter.getInitialState();

const markerSlice = createSlice({
  name: 'markers',
  initialState,
  reducers: {
    addMarker: markerAdapter.addOne,
    removeMarker: markerAdapter.removeOne,
    updateMarker: markerAdapter.updateOne,
    resetMarkers: markerAdapter.removeAll,
  },
});

export const { addMarker, removeMarker, updateMarker, resetMarkers } = markerSlice.actions;

export default markerSlice.reducer;

const markerAdapter = createEntityAdapter();

const marker = {
    id: 'markerId',
    title: 'Marker Title',
    position: { lat: 37.12345, lng: 126.67890 },
  };
  