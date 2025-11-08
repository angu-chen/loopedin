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

router.get('/for-user/:userId', async (req, res) => {
  try {
    const id = Number(req.params.userId)
    const groups = await db.getGroupByUserId(id)
    res.json(groups)
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error getting all groups',
    )
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newGroup = req.body
    await db.createGroup(newGroup)
    res.sendStatus(204)
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error creating new group',
    )
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
