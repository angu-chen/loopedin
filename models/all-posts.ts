export interface PostData {
  user_id: number
  text: string
  created_at: string
  authorName?: string
  authorImg?: string
}

export interface Post extends PostData {
  id: number
}
