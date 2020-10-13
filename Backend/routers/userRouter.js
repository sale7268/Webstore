import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

//instead of having all routes in server js we can define more to make it more easy
userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    //Adding user to user array
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;