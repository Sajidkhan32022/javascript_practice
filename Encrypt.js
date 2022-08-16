const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const encryptWithAES = (text) => {
  const passphrase = '1234';
  password =  CryptoJS.AES.encrypt(text, passphrase).toString();
  return password
};
Encrypt = encryptWithAES('sajid')

console.log(Encrypt)
const { sign, verify } = jwt;
const token = sign({"d":"dd"}, "secret", {expiresIn: 12})
console.log(token);
const verifycode = verify(token, "secret");
console.log(verifycode);





/*const decryptWithAES = (ciphertext) => {
  const passphrase = '1234';
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
console.log(decryptWithAES('U2FsdGVkX1/dzYT5NRPZo6U1GbeYoc5FCliLAspsYdo='))

console.log('----------------base64----------------')

const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};
console.log(encrypt('sajid'))
const decrypt = (data) => {
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
}; 
console.log(decrypt('c2FqaWQ=')) */