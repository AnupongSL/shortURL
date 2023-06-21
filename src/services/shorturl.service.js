const shortUrlRepository = require("../repositories/shorturl.repository");
const shortid = require("shortid");

exports.servShortUrl = async (url) => {
  const urlHash = await btoa(url);
  const shortID = shortid();
  const urlShot = await btoa(shortID);
  await shortUrlRepository.repoShortUrl({
    urloriginal: urlHash,
    urlshort: urlShot,
  });
  return shortID;
};

exports.servShortID = async (shortId) => {
  const urlShortDecrypt = await btoa(shortId);
  return await shortUrlRepository.repoShortID(urlShortDecrypt);
};

exports.servCheckUrl = async (url) => {
  const urlHash = await btoa(url);
  return await shortUrlRepository.repoCheckUrl(urlHash);
  // let count = result.length;
  // let urlOri = [];
  // let status = 0;
  // for (let i = 0; i < count; i++) {
  //   urlOri[i] = result[i]["urloriginal"];
  //   let isMatch = await bcrypt.compare(url, urlOri[i]);
  //   if (isMatch == true) {
  //     let urlShort = result[i]["urlshort"];
  //     status = 1;
  //     return urlShort;
  //   }
  // }
  // return status;
};
