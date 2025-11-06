import { Router } from 'express'
import * as db from '../db/group.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const groups = await db.getAllGroups()
    res.json(groups)
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error getting all groups',
    )
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
