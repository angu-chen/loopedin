import express from 'express'
import * as db from '../db/all-posts'
import { PostData } from '../../models/all-posts'

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
    const postData = req.body as PostData
    if (!postData) {
      console.error('No data')
      return res.status(400).send('Bad request')
    }
    const result = await db.addPost(postData)
    res.json(result)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to add post' })
  }
})

export default router
