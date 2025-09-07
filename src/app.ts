import express, { Express } from 'express'

const app: Express = express()

app.get('/', (req, res) => {
    res.send('Hello welcome to auth service')
})

export default app
