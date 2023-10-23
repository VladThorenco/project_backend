import { model, Schema } from 'mongoose';

export const moviesSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  genre: [String],
  rating: Number,
  duration: {
    hours: Number,
    minutes: Number,
  },
  reviews: [{ name: String, text: String }],
});

export const Movie = model('Movie', moviesSchema);
