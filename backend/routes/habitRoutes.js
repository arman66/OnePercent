import express from 'express'
const router = express.Router()


import {
    createHabit,
    updateHabit,
    getHabits
} from '../controllers/habitController.js'


import { protect } from '../middleware/authMiddleware.js'


// desc habit creation route
//access private

router.route('/').post(protect, createHabit).get(getHabits, protect)
router.route('/:id').put(protect, updateHabit)



export default router
