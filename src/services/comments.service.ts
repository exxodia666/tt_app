import {axiosService} from './axios.service';
import {ENDPOINTS} from '../config/endpoints';
import {TComment} from '../types';

class CommentsService {
  async getComments(postId: number): Promise<TComment[]> {
    const data = (await axiosService.get<TComment[]>(ENDPOINTS.comments)).data
      // simulate WHERE locally
      .filter(e => e.postId === postId);
    return data;
  }

  async addComment(text: string): Promise<TComment> {
    const {data} = await axiosService.post<TComment>(ENDPOINTS.comments, {
      text,
    });
    return data;
  }
}

export const commentsService = new CommentsService();
