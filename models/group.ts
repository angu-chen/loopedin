export interface GroupData {
  name: string
  description: string
  createdByUserId: number
}

export interface Group extends GroupData {
  id: number
}
