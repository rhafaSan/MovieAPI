import { Router, Request, Response } from 'express'
import { createMovie, deleteMovie, findAllMovies, findMovieById, updateMovie } from './controllers/moviesController'

import { validate } from './middleware/handleValidation'
import { movieCreateValidation } from './middleware/movieValidation'

const router = Router()

export default router.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API working')
})
.post('/movie',movieCreateValidation(),validate, createMovie)
.get('/movie/:id', findMovieById)
.get('/movie', findAllMovies)
.delete('/movie/:id', deleteMovie)
.patch('/movie/:id', updateMovie)