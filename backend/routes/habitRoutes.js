import express from 'express'
const router= express.Router()


import {
    createHabit
} from '../controllers/habitController.js'


import { protect} from '../middleware/authMiddleware.js'


// desc habit creation route
//access private

router.route('/').post(protect,createHabit)



export default router
