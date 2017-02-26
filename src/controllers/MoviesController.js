import MovieModel from '../models/MovieModel';
const moviesController = {};

moviesController.list = ( (request, response, next) => {
  MovieModel.find()
  .exec()
    .then(movies => {
      return response.json(movies);
    })
    .catch(err => {
      return next(err);
    });
});

moviesController.show = ( (request, response, next) => {
  MovieModel.findById(request.params._id)
  .exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
});

moviesController.create = ( (request, response, next) => {

  const movie = new MovieModel({
    title: request.body.title,
    overview: request.body.overview,
    poster: request.body.poster,
    releaseDate: request.body.releaseDate
  });


  movie
    .save()

    .then(newMovie => {
      return response.json(newMovie);
    })
    .catch(err => {
      return next(err);
    });
});

moviesController.update = ( (request, response, next) => {
  MovieModel.findById(request.params._id)
    .then(movie => {

      movie.title = request.body.title || movie.title;
      movie.overview = request.body.overview || movie.overview;
      movie.poster = request.body.poster || movie.poster;
      movie.releaseDate = request.body.releaseDate || movie.releaseDate;

      return movie
        .save();
    })
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
});

moviesController.remove = ( (request, response, next) => {
  MovieModel.findByIdAndRemove(request.params._id)
    .exec()
        .then(movie => {
          return response.json(movie);
        })
        .catch(err => {
          return next(err);
        });
});

export default moviesController;
