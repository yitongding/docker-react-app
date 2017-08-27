const User = require('../models/User');

export const addUser = async function addUser(req, res) {
  try {
    const user = new User();
    user.local.username = req.body.username;
    user.local.email = req.body.email;

    const password = req.body.password;
    const hash = await user.genereateHash(password);
    user.local.password = hash;
    await user.save();
    res.json({
      status: true,
      message: 'user created',
    });
  } catch (err) {
    res.json({
      status: false,
      message: err,
    });
  }
};


export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
};
