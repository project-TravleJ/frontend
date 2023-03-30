import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen4: false,
};

const modalSlice4 = createSlice({
  name: 'modal4',
  initialState,
  reducers: {
    openModal4: (state, action) => {
      state.isOpen4 = true;
    },
    closeModal4: (state, action) => {
      state.isOpen4 = false;
    },
    
  },
});



export const { openModal4, closeModal4 } = modalSlice4.actions;

export default modalSlice4.reducer;
