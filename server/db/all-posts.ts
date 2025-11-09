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

export async function addPost(newPost: PostData): Promise<Post> {
  //Get user id by using authId
  const { id } = await connection('user')
    .where('auth_id', newPost.authId)
    .select('id')
    .first()
  //Add post to database with userId
  const post = await connection('post')
    .insert({ user_id: id, text: newPost.text, created_at: newPost.created_at })
    .returning(['post.id', 'post.text', 'post.created_at', 'post.user_id'])
  return post[0]
}
