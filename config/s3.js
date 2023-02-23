const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  endpoint: 'https://s3.ianm1837.com',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

s3.client = new AWS.HttpClient();

module.exports = s3;
