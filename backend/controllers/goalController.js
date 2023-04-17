const Goal = require('../models/goalModel');
const User = require('../models/userModel');

const asyncHandler = require('express-async-handler');

// @desc Get goals 
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    
    const goals = await Goal.find({ user: req.user.id })

    res.json(goals)
})

// @desc Set goals 
// @route Post /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.json(goal)
})

// @desc Update goals 
// @route Put /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401);
        throw new Error('User not found')
    }


    //Make sure the login user matched the goal user
    if(goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json(updatedGoal)
})

// @desc Delete goals 
// @route DELECT /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401);
        throw new Error('User not found')
    }


    //Make sure the login user matched the goal user
    if(goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized')
    }

    await goal.remove()

    res.json(goal)
})

module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
}