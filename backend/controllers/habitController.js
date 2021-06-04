import asyncHandler from 'express-async-handler'

import Habit from '../models/habitModel.js'





// @desc    Create a habit
// @route   POST /api/habits
// @access  Private/User
const createHabit = asyncHandler(async (req, res) => {
    const habit = new Habit({
      name: 'Sample habit',
      category: "Sample Category",
      user: req.user._id,
      brand: 'Sample brand',
      progress: 1,
      poshabit: true ,
      frequency: "daily",
    })
  
    const createdHabit = await habit.save()
    res.status(201).json(createdHabit)
  })

export {createHabit}