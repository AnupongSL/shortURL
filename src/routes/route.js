const router = require('express').Router();

router.use('/short_url',require('./shorturl.route'))

module.exports = router 