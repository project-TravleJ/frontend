import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen10: false,
};

const modalSlice10 = createSlice({
  name: 'modal10',
  initialState,
  reducers: {
    openModal10: (state, action) => {
      state.isOpen10 = true;
    },
    closeModal10: (state, action) => {
      state.isOpen10 = false;
    },
    
  },
});



export const { openModal10, closeModal10 } = modalSlice10.actions;

export default modalSlice10.reducer;
