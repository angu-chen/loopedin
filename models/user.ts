export interface UserData {
  authId?: string
  username?: string
  fullname?: string
  location?: string
  img?: string
  bio?: string
  coverImg?: string
}

export interface User extends UserData {
  id: number
}
