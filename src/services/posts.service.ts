import {axiosService} from './axios.service';
import {ENDPOINTS} from '../config/endpoints';
import {TPost} from '../types';

class PostsService {
  async getPosts(): Promise<TPost[]> {
    const {data} = await axiosService.get<TPost[]>(ENDPOINTS.posts);
    return data;
  }

  async addPost(title: string, body: string): Promise<TPost> {
    const {data} = await axiosService.post<TPost>(ENDPOINTS.posts, {
      title,
      body,
    });
    return data;
  }

  async updatePost(id: string, title: string, body: string): Promise<TPost> {
    const {data} = await axiosService.patch<TPost>(ENDPOINTS.post(id), {
      title,
      body,
    });
    return data;
  }
}

export const postsService = new PostsService();
