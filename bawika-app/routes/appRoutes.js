const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const dongengRoutes = require('./user/dongengRoutes');
const pembelajaranRoutes = require('./user/pembelajaranRouter');
const categoryRoutes = require('./user/categoryRoutes');
const musicRoutes = require('./user/musicRoutes');

router.use(authRoutes);
router.use(dongengRoutes);
router.use(pembelajaranRoutes);
router.use(categoryRoutes);
router.use(musicRoutes);

module.exports = router;
