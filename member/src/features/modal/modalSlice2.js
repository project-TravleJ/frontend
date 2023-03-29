import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen2: false,
};

const modalSlice2 = createSlice({
  name: 'modal2',
  initialState,
  reducers: {
    openModal2: (state, action) => {
      state.isOpen2 = true;
    },
    closeModal2: (state, action) => {
      state.isOpen2 = false;
    },
    
  },
});



export const { openModal2, closeModal2 } = modalSlice2.actions;

export default modalSlice2.reducer;
