import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen14: false,
};

const modalSlice14 = createSlice({
  name: 'modal14',
  initialState,
  reducers: {
    openModal14: (state, action) => {
      state.isOpen14 = true;
    },
    closeModal14: (state, action) => {
      state.isOpen14 = false;
    },
    
  },
});



export const { openModal14, closeModal14 } = modalSlice14.actions;

export default modalSlice14.reducer;
