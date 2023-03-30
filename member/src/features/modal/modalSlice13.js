import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen13: false,
};

const modalSlice13 = createSlice({
  name: 'modal13',
  initialState,
  reducers: {
    openModal13: (state, action) => {
      state.isOpen13 = true;
    },
    closeModal13: (state, action) => {
      state.isOpen13 = false;
    },
    
  },
});



export const { openModal13, closeModal13 } = modalSlice13.actions;

export default modalSlice13.reducer;
