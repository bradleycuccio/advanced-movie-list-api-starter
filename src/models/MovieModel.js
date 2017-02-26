import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  overview: {
    required: true,
    type: String
  },
  poster: {
    required: true,
    type: String
  },
  releaseDate: {
    required: true,
    type: String
  }
});

export default mongoose.model('Movie', movieSchema);
