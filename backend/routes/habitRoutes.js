import express from 'express'
const router= express.Router()


import {
} from '../controllers/habitController.js'
import { protect} from '../middleware/authMiddleware.js'


// desc fetch user rout
//access 
//
router.post('/')



export default router
