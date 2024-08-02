//ENV
require('dotenv').config()

import express from 'express'
import config from 'config'

const app = express()

//App Port
const port = config.get<number>('port')
//Morgan
import morganMiddleware from './middleware/morganMiddleware'
app.use(morganMiddleware)

//JSON Middleware
app.use(express.json())
import db from '../config/db'

import router from './router'
app.use('/api/', router)

//logger
import Logger from '../config/logger'



app.listen(port, async () => {
    await db()
    Logger.info(`Aplicação rodando na porta ${port}`)
})