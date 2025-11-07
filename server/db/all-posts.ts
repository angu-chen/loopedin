import connection from './connection'
import { Post } from '../../models/all-posts'

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
