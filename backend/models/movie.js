const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    validate: { validator: (value) => validator.isURL(value), message: 'Неправильный формат ссылки на изображение!' },
  },
  trailer: {
    type: String,
    validate: { validator: (value) => validator.isURL(value), message: 'Неправильный формат ссылки на трейлер!' },
  },
  thumbnail: {
    type: String,
    validate: { validator: (value) => validator.isURL(value), message: 'Неправильный формат ссылки на изображение!' },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
