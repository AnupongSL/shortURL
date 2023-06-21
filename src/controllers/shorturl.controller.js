const shortUrlService = require("../services/shorturl.service");

/**
 * @swagger
 * /short_url/short:
 *   post:
 *     summary: Return the Short URL
 *     tags: [ShortURL]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: The ShortURL was successfully create
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 */

exports.shortUrl = async (req, res) => {
  const url = req.body.url
  const result = await shortUrlService.servCheckUrl(url)
  if(result == ""){
    const urlNew = await shortUrlService.servShortUrl(url);
    res.status(201).json({msg: `http://localhost:3000/short_url/${urlNew}`});
  } else {
    let urlOld = result[0]['urlshort']
    const urlOld2 = await atob(urlOld)
    res.status(201).json({msg: `http://localhost:3000/short_url/${urlOld2}`});
  }
};


exports.shortID = async (req, res) => {
  const shortId = req.params.shortId
  const entry = await shortUrlService.servShortID(shortId);
  const result = entry[0]['urloriginal']
  const urlOriginal = atob(result)
  res.redirect(urlOriginal);
};

/**
 * @swagger
 * tags:
 *   name: ShortURL
 *   description: ShortURL management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - url
 *       properties:
 *         url:
 *           type: string
 *           description: The URL Original
 *     RegisterResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: The URL Short
 */