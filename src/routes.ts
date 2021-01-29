import { Router, Request, Response } from 'express'
import {
   getCars,
   getOneCar,
   saveCars,
   deleteCar,
   deleteAllCars,
   renameCar
} from './controller/CarsController'

const routes = Router()

routes.get('/', (req: Request, res: Response) =>
   res.json({ message: 'Hello There my Friend' })
)

routes.get('/cars', getCars)
routes.get('/cars/:id', getOneCar)
routes.post('/cars', saveCars)
routes.put('/cars/:id', renameCar)
routes.delete('/cars/:id', deleteCar)
routes.delete('/cars', deleteAllCars)

export default routes
