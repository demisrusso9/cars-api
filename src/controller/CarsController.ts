import { getRepository } from 'typeorm'
import { Request, Response } from 'express'

import { Cars } from '../entity/Cars'

export const getCars = async (req: Request, res: Response) => {
   const cars = await getRepository(Cars)
      .find()
      .then(data => data)
      .catch(err => err)
      
   if (cars.length > 0) return res.json(cars)   

   return res.status(404).json({ message: "We don't have any cars" })
}

export const getOneCar = async (req: Request, res: Response) => {
   const { id } = req.params
   const cars = await getRepository(Cars)
      .findOneOrFail(id)
      .then(data => data)
      .catch(_ => res.json({ message: "This car ID don't exist" }))

   return res.json(cars)
}

export const saveCars = async (req: Request, res: Response) => {
   const cars = await getRepository(Cars)
      .save(req.body)
      .then(data => data)
      .catch(err => err)
      
   return res.json(cars)
}

export const renameCar = async (req: Request, res: Response) => {
   const { id } = req.params

   const car = await getRepository(Cars)
      .update(id, req.body)
      .then(data => data)
      .catch(err => err)

   if (car.affected)
      return res.json({ message: 'Car info renamed successfully' })

   return res.status(404).json({ message: "This car ID don't exist" })
}

export const deleteCar = async (req: Request, res: Response) => {
   const car = await getRepository(Cars)
      .delete(req.params)
      .then(data => data)
      .catch(err => err)

   if (car.affected > 0)
      return res.json({ message: 'Car deleted successfully' })

   return res.json({ message: "This car ID don't exist" })
}

export const deleteAllCars = async (req: Request, res: Response) => {
   const car = await getRepository(Cars)
      .createQueryBuilder()
      .delete()
      .from(Cars)
      .execute()
      .then(data => data)
      .catch(err => err)

   if (car.affected > 0)
      return res.json({ message: 'All Cars deleted successfully' })

   return res.json({ message: "We don't have any cars" })
}
