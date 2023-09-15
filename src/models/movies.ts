import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const moviesScheme = new Scheme({
  title: {
    type: String,
    require: true
  },
  director: {
    type: String,
    require: true
  },
  year: {
    type: Number,
    require: true
  },
  genre: [ String ],
  rating: Number,
  duration: {
    hours: Number,
    minutes: Number,
  },
  review: [ {name: String, text: String}
  ]
})

export const Movie = mongoose.model('Movie', moviesScheme);
