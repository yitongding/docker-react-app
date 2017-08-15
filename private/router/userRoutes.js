import express from 'express'
import {addUser, getUsers} from '../controller/userController'

const router = express.Router()

router.route('/users')
  .get(getUsers)

router.route('/user')
  .post(addUser)

export default router
