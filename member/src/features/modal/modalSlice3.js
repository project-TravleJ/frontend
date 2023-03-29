import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen2: false,
};

const modalSlice3 = createSlice({
  name: 'modal3',
  initialState,
  reducers: {
    openModal3: (state, action) => {
      state.isOpen3 = true;
    },
    closeModal3: (state, action) => {
      state.isOpen3 = false;
    },
    
  },
});



export const { openModal3, closeModal3 } = modalSlice3.actions;

export default modalSlice3.reducer;
