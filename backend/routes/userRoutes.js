import express from 'express'
const router= express.Router()


import {
    authUser,
    getUserProfile,
    registerUser
} from '../controllers/userController.js'
import { protect} from '../middleware/authMiddleware.js'


// desc fetch user rout
//access 
//
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser)


export default router
