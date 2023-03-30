import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen12: false,
};

const modalSlice12 = createSlice({
  name: 'modal12',
  initialState,
  reducers: {
    openModal12: (state, action) => {
      state.isOpen12 = true;
    },
    closeModal12: (state, action) => {
      state.isOpen12 = false;
    },
    
  },
});



export const { openModal12, closeModal12 } = modalSlice12.actions;

export default modalSlice12.reducer;
