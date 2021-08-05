import asyncHandler from 'express-async-handler'
import Habit from '../models/habitModel.js'


// @desc    Fetch all habits
// @route   GET /api/habits
// @access  Private
const getHabits = asyncHandler(async (req, res) => {

  const habits = await Habit.find()

  res.json({ habits })
})


// @desc    Create a habit
// @route   POST /api/habits
// @access  Private/User
const createHabit = asyncHandler(async (req, res) => {

  const habit = new Habit({
    user: req.user._id,
    name: req.body.name,
    category: req.body.category,
    progress: req.body.progress,
    poshabit: req.body.poshabit,
    frequency: req.body.frequency

  })

  const createdHabit = await habit.save()
  res.status(201).json(createdHabit)
})
// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateHabit = asyncHandler(async (req, res) => {
  
  const {
    name,
    category,
    frequency,
    progress,
    poshabit

  } = req.body

  const habit = await Habit.findById(req.params.id)
   
  if (habit) {
    habit.name = name
    habit.category = category
    habit.frequency = frequency
    habit.progress = progress
    habit.poshabit = poshabit


    const updatedHabit = await habit.save()
    res.json(updatedHabit)
  } else {
    res.status(404)
    throw new Error('Habit not found')
  }
})

export { createHabit, updateHabit, getHabits }