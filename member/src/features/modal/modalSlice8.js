import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen8: false,
};

const modalSlice8 = createSlice({
  name: 'modal8',
  initialState,
  reducers: {
    openModal8: (state, action) => {
      state.isOpen8 = true;
    },
    closeModal8: (state, action) => {
      state.isOpen8 = false;
    },
    
  },
});



export const { openModal8, closeModal8 } = modalSlice8.actions;

export default modalSlice8.reducer;
