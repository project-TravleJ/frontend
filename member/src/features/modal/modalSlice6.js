import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen6: false,
};

const modalSlice6 = createSlice({
  name: 'modal6',
  initialState,
  reducers: {
    openModal6: (state, action) => {
      state.isOpen6 = true;
    },
    closeModal6: (state, action) => {
      state.isOpen6 = false;
    },
    
  },
});



export const { openModal6, closeModal6 } = modalSlice6.actions;

export default modalSlice6.reducer;
