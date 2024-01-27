import {createAsyncThunk} from '@reduxjs/toolkit';
import {postsService} from '../../services/posts.service';
import {AppDispatch, RootState} from '../types';
import {TComment, TPost} from '../../types';
import {commentsService} from '../../services';

export const fetchComments = createAsyncThunk<
  Array<TComment>,
  number, // postId
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('comments/fetch', async postId => {
  const results = await commentsService.getComments(postId);
  return results;
});

export const createComment = createAsyncThunk<
  TComment,
  string, // text
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('comments/create', async text => {
  const results = await commentsService.addComment(text);
  return results;
});
