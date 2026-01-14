import express from 'express'
import * as Path from 'node:path'

import userRoutes from './routes/user.ts'
import weatherRoutes from './routes/weather.ts'
import groupRoutes from './routes/group.ts'
import allPostsRoutes from './routes/all-posts.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/user', userRoutes)
server.use('/api/v1/weather', weatherRoutes)
server.use('/api/v1/group', groupRoutes)
server.use('/api/v1/posts', allPostsRoutes)
server.use('/uploads', express.static('public/uploads'))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
