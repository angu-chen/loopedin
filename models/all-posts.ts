export interface Post {
  id: number
  user_id: number
  text: string
  created_at: string
  authorName?: string
  authorImg?: string
}

export interface PostData {
  authId: string
  text: string
  created_at: string
}
