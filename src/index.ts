import 'reflect-metadata'
import * as express from 'express'
import * as cors from 'cors'
import routes from './routes'
import { createConnection } from 'typeorm'

const app = express()

createConnection();

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333)
