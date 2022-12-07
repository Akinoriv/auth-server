module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "my_root1",
  DB: "authbd",
  dialect: "mysql",
  pool: {
    max: 200,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
