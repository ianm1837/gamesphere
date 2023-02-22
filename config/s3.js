const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: 'gamesphere_user',
  secretAccessKey: 'gamesphere_password',
  endpoint: 'https://s3.ianm1837.com',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

s3.client = new AWS.HttpClient();

module.exports = s3;
