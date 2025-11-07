import { Router } from 'express'
import * as db from '../db/user.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()
    res.json(users)
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error getting all users',
    )
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/loop/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await db.getUserByLoopId(id)
    user
      ? res.json(user)
      : res.status(404).json({ message: 'Something went wrong' })
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error getting all users',
    )
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/user-and-posts/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await db.getUserByLoopId(id)
    user
      ? res.json(user)
      : res.status(404).json({ message: 'Something went wrong' })
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error getting user and posts',
    )
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/auth/:id', async (req, res) => {
  try {
    const id = req.params.id
    const users = await db.getUserByAuthId(id)
    users
      ? res.json(users)
      : res.status(404).json({ message: 'Something went wrong' })
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error getting all users',
    )
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    await db.addUser(newUser)
    res.sendStatus(204)
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error creating new user',
    )
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
