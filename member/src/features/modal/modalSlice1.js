import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen1: false,
};

const modalSlice1 = createSlice({
  name: 'modal1',
  initialState,
  reducers: {
    openModal1: (state, action) => {
      state.isOpen1 = true;
    },
    closeModal1: (state, action) => {
      state.isOpen1 = false;
    },
    
  },
});



export const { openModal1, closeModal1 } = modalSlice1.actions;

export default modalSlice1.reducer;
