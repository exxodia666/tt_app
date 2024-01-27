import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
import {createComment, fetchComments} from '../../thunk/comments.thunk';

const slice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchComments.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    });

    builder.addCase(createComment.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.comments = [...state.comments, action.payload];
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(createComment.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    });
  },
});

export const commentsReducer = slice.reducer;
