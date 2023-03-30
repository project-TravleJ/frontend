import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen9: false,
};

const modalSlice9 = createSlice({
  name: 'modal9',
  initialState,
  reducers: {
    openModal9: (state, action) => {
      state.isOpen9 = true;
    },
    closeModal9: (state, action) => {
      state.isOpen9 = false;
    },
    
  },
});



export const { openModal9, closeModal9 } = modalSlice9.actions;

export default modalSlice9.reducer;
