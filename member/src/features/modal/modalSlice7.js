import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen7: false,
};

const modalSlice7 = createSlice({
  name: 'modal7',
  initialState,
  reducers: {
    openModal7: (state, action) => {
      state.isOpen7 = true;
    },
    closeModal7: (state, action) => {
      state.isOpen7 = false;
    },
    
  },
});



export const { openModal7, closeModal7 } = modalSlice7.actions;

export default modalSlice7.reducer;
