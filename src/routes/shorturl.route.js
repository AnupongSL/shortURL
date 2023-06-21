const router = require('express').Router();
const shortUrlController = require('../controllers/shorturl.controller')

router.post('/short', shortUrlController.shortUrl)
router.get('/:shortId', shortUrlController.shortID)

module.exports = router 