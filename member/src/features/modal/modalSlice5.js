import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen5: false,
};

const modalSlice5 = createSlice({
  name: 'modal5',
  initialState,
  reducers: {
    openModal5: (state, action) => {
      state.isOpen5 = true;
    },
    closeModal5: (state, action) => {
      state.isOpen5 = false;
    },
    
  },
});



export const { openModal5, closeModal5 } = modalSlice5.actions;

export default modalSlice5.reducer;
