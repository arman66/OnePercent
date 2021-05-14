import express from 'express'
const router= express.Router()


import {
    authUser,
    registerUser
} from '../controllers/userController.js'
import { protect} from '../middleware/authMiddleware.js'


// desc fetch user rout
//access 
//
router.post('/login', authUser)

router.route('/').post(registerUser).get(protect)


export default router
