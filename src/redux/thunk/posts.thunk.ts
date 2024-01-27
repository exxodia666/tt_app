import {createAsyncThunk} from '@reduxjs/toolkit';
import {postsService} from '../../services/posts.service';
import {AppDispatch, RootState} from '../types';
import {TPost} from '../../types';

export const fetchPosts = createAsyncThunk<
  Array<TPost>,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('posts/fetch', async () => {
  const results = await postsService.getPosts();
  return results;
});

type TCreatePostBody = {title: string; body: string};

export const createPost = createAsyncThunk<
  TPost,
  TCreatePostBody,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('posts/create_post', async ({title, body}) => {
  const results = await postsService.addPost(title, body);
  return results;
});

type TUpdatePostBody = {id: string; title: string; body: string};
export const updatePost = createAsyncThunk<
  TPost,
  TUpdatePostBody,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('posts/update_post', async ({id, title, body}) => {
  const results = await postsService.updatePost(id, title, body);
  return results;
});
