import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen15: false,
};

const modalSlice15 = createSlice({
  name: 'modal15',
  initialState,
  reducers: {
    openModal15: (state, action) => {
      state.isOpen15 = true;
    },
    closeModal15: (state, action) => {
      state.isOpen15 = false;
    },
    
  },
});



export const { openModal15, closeModal15 } = modalSlice15.actions;

export default modalSlice15.reducer;
