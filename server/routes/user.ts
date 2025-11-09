import { Router } from 'express'
import * as db from '../db/user.ts'
import { getPostsByUserId } from '../db/all-posts.ts'
import { getGroupByUserId } from '../db/group.ts'
import * as Path from 'node:path'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: Path.join('public/uploads'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + Path.extname(file.originalname))
  },
})

const upload = multer({ storage })

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

router.get('/posts-and-groups/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await db.getUserByLoopId(id)
    const posts = await getPostsByUserId(id)
    const groups = await getGroupByUserId(id)
    user && posts && groups
      ? res.json({ ...user, posts: posts, groups: groups })
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
    console.log(id)
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

router.put('/:id', upload.single('img'), async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { bio } = req.body
    const img = req.file ? `/uploads/${req.file.filename}` : undefined
    const updatedUser = await db.updateUser(id, { bio, img })
    res.json(updatedUser)
  } catch (error) {
    console.log(error instanceof Error ? error.message : 'Error updating user')
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
