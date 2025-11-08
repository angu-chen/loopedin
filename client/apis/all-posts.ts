import request from 'superagent'
import { Post, PostData } from '../../models/all-posts'

const rootURL = new URL(`/api/v1/posts`, document.baseURI)

export async function getAllPosts(): Promise<Post[]> {
  const res = await request.get(`${rootURL}`)
  return res.body as Post[]
}

export async function addPost(newPost: PostData): Promise<Post[]> {
  const res = await request.post(`${rootURL}`).send(newPost)
  return res.body as Post[]
}
