import express from 'express'
import * as db from '../db/all-posts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await db.getAllPosts()
    res.json(posts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch posts' })
  }
})

router.get('/:userId', async (req, res) => {
  try {
    const userId = Number(req.params.userId)
    const posts = await db.getPostsByUserId(userId)
    res.json(posts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch posts' })
  }
})

export default router
