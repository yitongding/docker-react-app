import User from '../models/User'

export const addUser = async function (req, res) {
  try {
    let user = new User()
    user.local.username = req.body.username
    user.local.email = req.body.email

    let password = req.body.password
    let hash = await user.genereateHash(password)
    user.local.password = hash
    await user.save()
    res.json({ message: 'user created'})
  }
  catch (err) {
    res.send(err)
  }
}


export const getUsers = async (req, res) => {
  try {
    let users = await User.find()
    res.json(users)
  }
  catch (err) {
    res.send(err)
  }
}