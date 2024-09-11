const express = require('express');

const {createPhilatelist, getPhilatelists, getPhilatelistById, updatePhilatelist, deletePhilatelist} =
require('../controllers/philatelistController')

const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const { signIn } = require('../controllers/authController');

//public route
router.post('/login', signIn);

//protected routes
// Requires Authentication
router.get('/dashboard', authMiddleware, (req, res) => {
    res.send(`Welcome to the dashboard, Philatelist!`);
  });

//creating a new user
router.post('/', createPhilatelist);

//getting all users
router.get('/', getPhilatelists)

//getting from id
router.get('/:id', getPhilatelistById);

// updating a user by id
router.put('/:id', updatePhilatelist);

//deleting a user
router.delete('/:id', deletePhilatelist);

module.exports = router;