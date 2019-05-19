import mongoose from 'mongoose';

import User from './user';
import Charity from './charity';
import Card from './card';
import Order from './order';
import Receiver from './receiver';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true });
};

const models = { User, Charity, Order, Receiver, Card };

export { connectDb };

export default models;