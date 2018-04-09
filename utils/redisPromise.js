const getRedis = redisClient => function get(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, reply) => {
      if (err) return reject(err);
      return resolve(JSON.parse(reply));
    });
  });
};

const setRedis = redisClient => function set(key, value) {
  return new Promise((resolve, reject) => {
    redisClient.set(key, JSON.stringify(value), (err, reply) => {
      if (err) return reject(err);
      return resolve(reply);
    });
  });
};

const delRedis = redisClient => function del(key) {
  return new Promise((resolve, reject) => {
    redisClient.del(key, (err, reply) => {
      if (err) return reject(err);
      return resolve(reply);
    });
  });
};

module.exports = {
  getRedis,
  setRedis,
  delRedis,
};
