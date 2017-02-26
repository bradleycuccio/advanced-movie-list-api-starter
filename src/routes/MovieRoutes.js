import express from 'express';
import MoviesController from '../controllers/MoviesController';

const router = express.Router();


router.get('/movies', MoviesController.list);

router.get('/movies/:_id', MoviesController.show);

router.post('/movies', MoviesController.create);

router.put('/movies/:_id', MoviesController.update);

router.delete('/movies/:_id', MoviesController.remove);

export default router;
