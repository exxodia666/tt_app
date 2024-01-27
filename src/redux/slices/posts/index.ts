import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
import {createPost, fetchPosts, updatePost} from '../../thunk/posts.thunk';

const slice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    });

    builder.addCase(createPost.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts = [...state.posts, action.payload];
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    });

    builder.addCase(updatePost.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.posts = [
        ...state.posts.filter(e => e.id !== action.payload.id),
        action.payload,
      ];
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    });
  },
});

export const postsReducer = slice.reducer;
