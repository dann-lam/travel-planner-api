const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
console.log("Hello!");
module.exports = router;
