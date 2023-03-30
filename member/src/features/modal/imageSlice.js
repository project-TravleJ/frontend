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
  },
});

export const {
  uploadImageStart,
  uploadImageSuccess,
  uploadImageFailure,
} = imageSlice.actions;

export const uploadImage = (file) => async (dispatch) => {
  try {
    dispatch(uploadImageStart());

    const formData = new FormData();
    formData.append('file', file);

    // 서버 API를 사용하지 않고 로컬 파일 시스템에서 이미지를 불러옵니다.
    const imageUrl = URL.createObjectURL(file);

    dispatch(uploadImageSuccess(imageUrl));
  } catch (error) {
    dispatch(uploadImageFailure(error.message));
  }
};

export const selectImage = (state) => state.image;

export default imageSlice.reducer;