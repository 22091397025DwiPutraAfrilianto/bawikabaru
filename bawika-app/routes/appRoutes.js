const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const dongengRoutes = require('./user/dongengRoutes');

router.use(authRoutes);
router.use(dongengRoutes);

module.exports = router;
