import crypto = require('crypto')

export const hmac = function (alg, str, keyForPass) {
  var inst = crypto.createHmac(alg, keyForPass)
  inst.update(str)
  return inst.digest('hex')
}

export const hash = function (alg, str) {
  var inst = crypto.createHash(alg)
  inst.update(str)
  return inst.digest('hex')
}

export const encryptText = (text, key) => {
  var cipher = crypto.createCipher('aes-256-cbc', key)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex')
  return crypted
}

export const decryptText = (text, key) => {
  var decipher = crypto.createDecipher('aes-256-cbc', key)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8')
  return dec
}

export const encryptObj = (obj, key) => encryptText(JSON.stringify(obj), key)

export const decryptObj = (text, key) => JSON.parse(decryptText(text, key))
