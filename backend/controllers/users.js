const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ConflictError = require('../errors/conflict-error');

const { NODE_ENV, JWT_SECRET } = process.env;

// controller for api testing
module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        bcrypt.hash(password, 10)
          .then((hash) => User.create({
            email, name, password: hash,
          })
            .then((userData) => res.send({
              data:
                {
                  name: userData.name,
                  _id: userData._id,
                  email: userData.email,
                },
            }))
            .catch((err) => {
              if (err.name === 'ValidationError') {
                next(new BadRequestError('Переданы некорректные данные при создании пользователя'));
              } else {
                next(err);
              }
            }));
      } else {
        throw new ConflictError('Данный email занят другим пользователем');
      }
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret-key',
        { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      } else {
        res.send(user);
      }
    })
    .catch(next);
};

module.exports.updateProfile = (req, res, next) => {
  const { name, email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user || req.user._id.toString() === user._id.toString()) {
        User.findByIdAndUpdate(req.user._id, { name, email }, { new: true, runValidators: true })
          .then((userData) => {
            if (userData === null) {
              throw new NotFoundError('Пользователь не найден');
            } else {
              res.send({ data: userData });
            }
          })
          .catch((err) => {
            if (err.name === 'ValidationError' || err.name === 'CastError') {
              next(new BadRequestError('Переданы некорректные данные при обновлении пользователя'));
            } else {
              next(err);
            }
          });
      } else {
        throw new ConflictError('Данный email занят другим пользователем');
      }
    })
    .catch(next);
};
