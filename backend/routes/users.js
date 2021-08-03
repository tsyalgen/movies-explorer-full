const router = require('express').Router();
const {
  getUsers, getCurrentUser, updateProfile,
} = require('../controllers/users');
const { validateUpdateProfile } = require('../middlewares/validators');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.patch('/me', validateUpdateProfile, updateProfile);

module.exports = router;
