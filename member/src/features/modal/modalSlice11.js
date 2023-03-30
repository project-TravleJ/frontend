import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen11: false,
};

const modalSlice11 = createSlice({
  name: 'modal11',
  initialState,
  reducers: {
    openModal11: (state, action) => {
      state.isOpen11 = true;
    },
    closeModal11: (state, action) => {
      state.isOpen11 = false;
    },
    
  },
});



export const { openModal11, closeModal11 } = modalSlice11.actions;

export default modalSlice11.reducer;
