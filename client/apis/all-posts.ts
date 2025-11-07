import request from 'superagent'
import { Post } from '../../models/all-posts'

const rootURL = '/api/v1/posts'

export async function getAllPosts(): Promise<Post[]> {
  const res = await request.get(rootURL)
  return res.body
}
