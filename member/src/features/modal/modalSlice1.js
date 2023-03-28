import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSlice1 = createSlice({
  name: 'modal1',
  initialState,
  reducers1: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    
  },
});



export const { openModal, closeModal } = modalSlice1.actions;

export default modalSlice1.reducer;
