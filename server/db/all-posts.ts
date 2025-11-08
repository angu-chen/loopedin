import connection from './connection'
import { Post, PostData } from '../../models/all-posts'

export function getAllPosts(db = connection): Promise<Post[]> {
  return db('post')
    .join('user', 'post.user_id', 'user.id')
    .select(
      'post.id',
      'post.text',
      'post.created_at',
      'user.fullname as authorName',
      'user.img as authorImg',
    )
}

export function getPostsByUserId(id: number): Promise<Post[]> {
  return connection('post')
    .join('user', 'post.user_id', 'user.id')
    .where('post.user_id', id)
    .select(
      'post.id',
      'post.text',
      'post.created_at',
      'user.fullname as authorName',
      'user.img as authorImg',
    )
}

export function addPost(newPost: PostData): Promise<Post> {
  return connection('post')
    .insert(newPost)
    .returning(['post.id', 'post.text', 'post.created_at'])
}
