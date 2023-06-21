const db = require("../database/models");

exports.repoCheckUrl = async (urlHash) =>
  await db.Short_urls.findAll({
    where: {
      urloriginal: urlHash,
    },
  });

exports.repoShortUrl = async (urloriginal) =>
  await db.Short_urls.create(urloriginal);

exports.repoShortID = async (urlShortDecrypt) =>
  await db.Short_urls.findAll({
    where: {
      urlshort: urlShortDecrypt,
    },
  });
