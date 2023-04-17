const Goal = require('../models/goalModel');

// @desc Get goals 
// @route Get /api/goals
// @access Private
const getGoals = async (req, res) => {
    
    const goals = await Goal.find()

    res.json(goals)
}

// @desc Set goals 
// @route Post /api/goals
// @access Private
const setGoal = async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.json(goal)
}

// @desc Update goals 
// @route Put /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json(updatedGoal)
}

// @desc Delete goals 
// @route DELECT /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.json(goal)
}

module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
}