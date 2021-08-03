require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const error = require('./middlewares/error');
const { validateAuth, validateSignIn, validateSignUp } = require('./middlewares/validators');
const NotFoundError = require('./errors/not-found-error');

const { NODE_ENV, PORT = 3001, BASE_URL } = process.env;

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect(`${NODE_ENV === 'production' ? BASE_URL : 'mongodb://localhost:27017/moviesexplorerdb'}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(requestLogger);
// app.use(limiter);

app.post('/signin', validateSignIn, login);
app.post('/signup', validateSignUp, createUser);

app.use(validateAuth, auth);

app.use('/users', userRouter);
app.use('/movies', movieRouter);

app.all('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

app.use(errorLogger);

app.use(errors());
app.use(error);

app.listen(PORT);
