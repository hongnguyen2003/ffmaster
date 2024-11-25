const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ffmaster', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
initDb();

export default sequelize;