import mongoose from 'mongoose';

export const isAlive = (req, res, next) => {
  try {
    res.status(200).json({
      message: 'success !',
      state: 'up',
      uptime: Math.floor(process.uptime()),
      dbState: mongoose.STATES[mongoose.connection.readyState],
    });
  } catch (e) {
    next(e);
  }
};
