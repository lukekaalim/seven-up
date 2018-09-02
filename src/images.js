// @flow
import uuid from 'uuid/v4';
import aws from 'aws-sdk';

const s3 = aws.S3();

const uploadImageToBucket = (config, imageKey, imageBody) => (
  new Promise((resolve, reject) => (
    s3.putObject(config.imageBucket, imageKey, imageBody, (err, data) => (
      err ? reject(err) : resolve(data)
    ));
  ));
);

const removeImageFromBucket = (config, imageKey) => (
  new Promise((resolve, reject) => (
    s3.deleteObject(config.imageBucket, imageKey, (err, data) => (
      err ? reject(err) : resolve(data)
    ));
  ));
);

const createImage = (config: Config) => async (request: Request, response: Response) => {
  const imageKey = uuid();
  await uploadImageToBucket(config, imageKey, request.body);
  response.send({ create: 'success', imageKey });
  response.end(200);
};

const deleteImage = (config: Config) => async (request: Request, response: Response) => {
  const imageKey = request.query.imageKey;
  await removeImageFromBucket(config, imageKey);
  response.send({ remove: 'success', imageKey });
  response.end(200);
};
