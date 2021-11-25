const express = require("express");
const router = express.Router();

const {login,register,admin} = require("../controllers/userController")
const adminCheck = require('../middlewares/adminCheck');

router.get('/login',login);
router.get('/register',register);

router.get('/admin',adminCheck,admin);

module.exports = router;