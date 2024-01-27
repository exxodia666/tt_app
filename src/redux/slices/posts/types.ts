import {TPost} from '../../../types';

export interface PostsState {
  posts: Array<TPost>;
  isLoading: boolean;
  error: string | undefined;
}
