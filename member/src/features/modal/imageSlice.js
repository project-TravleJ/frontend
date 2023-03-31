import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    loading: false,
    imageUrl: null,
    error: null,
  },
  reducers: {
    uploadImageStart: (state) => {
      state.loading = true;
      state.imageUrl = null;
      state.error = null;
    },
    uploadImageSuccess: (state, action) => {
      state.loading = false;
      state.imageUrl = action.payload;
      state.error = null;
    },
    uploadImageFailure: (state, action) => {
      state.loading = false;
      state.imageUrl = null;
      state.error = action.payload;
    },
    invalidImage: (state) => {
      state.loading = false;
      state.imageUrl = null;
      state.error = '이미지 파일만 업로드 가능합니다.';
    },
  },
});

export const {
  uploadImageStart,
  uploadImageSuccess,
  uploadImageFailure,
  invalidImage,
} = imageSlice.actions;

export const uploadImage = (file) => async (dispatch) => {
  try {
    dispatch(uploadImageStart());

    if (!file.type || !file.type.endsWith('.jpg') || !file.type.endsWith('.png')) {
      dispatch(invalidImage());
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const blob = new Blob([arrayBuffer], { type: file.type });
      const imageUrl = URL.createObjectURL(blob);
      dispatch(uploadImageSuccess(imageUrl));
    };
    reader.readAsArrayBuffer(file);
  } catch (error) {
    dispatch(uploadImageFailure(error.message));
  }
};

export const selectImage = (state) => state.image;

export default imageSlice.reducer;
