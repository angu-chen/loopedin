import express from 'express'
import * as db from '../db/all-posts'
import { PostData } from '../../models/all-posts'
// import checkJwt, { JwtRequest } from '../auth0'

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

router.post('/', async (req, res) => {
  try {
    const newPost = req.body as PostData
    const post = await db.addPost(newPost)
    res.json(post)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to add post' })
  }
})

export default router
