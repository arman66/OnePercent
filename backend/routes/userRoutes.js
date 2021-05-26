import express from 'express'
const router= express.Router()


import {
    authUser,
    registerUser
} from '../controllers/userController.js'

import { protect} from '../middleware/authMiddleware.js'


//register user
router.route('/').post(registerUser).get(protect)

//login user with authentication
router.post('/login', authUser)




export default router
