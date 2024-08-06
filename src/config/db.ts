import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';

const mongoDB =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
mongoose
  .connect(mongoDB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const sequelize = new Sequelize(
  process.env.POSTGRES_URI || 'postgres://user:pass@localhost:5432/mydatabase',
);

sequelize
  .authenticate()
  .then(() => console.log('PostgreSQL connected'))
  .catch((err) => console.error('Unable to connect to the database:', err));

export { mongoose, sequelize };
