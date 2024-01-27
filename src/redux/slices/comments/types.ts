import {TComment, TPost} from '../../../types';

export interface CommentsState {
  comments: Array<TComment>;
  isLoading: boolean;
  error: string | undefined;
}
