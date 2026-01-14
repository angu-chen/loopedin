import request from 'superagent'
import { Post, PostData } from '../../models/all-posts'

const rootURL = new URL(`/api/v1/posts`, document.baseURI)

export async function getAllPosts(): Promise<Post[]> {
  const res = await request.get(`${rootURL}`)
  return res.body as Post[]
}

interface AddPostFunction {
  newPost: PostData
  token: string
}

export async function addPost({
  newPost,
  token,
}: AddPostFunction): Promise<Post[]> {
  const res = await request
    .post(`${rootURL}`)
    .set('Authorisation', `Bearer ${token}`)
    .send(newPost)
  return res.body as Post[]
}
