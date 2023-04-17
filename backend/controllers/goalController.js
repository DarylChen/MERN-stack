// @desc Get goals 
// @route Get /api/goals
// @access Private
const getGoals = async (req, res) => {
    res.json({message: 'get goals'})
}

// @desc Set goals 
// @route Post /api/goals
// @access Private
const setGoals = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.json({message: 'set goals'})
}

// @desc Update goals 
// @route Put /api/goals/:id
// @access Private
const updateGoals = async (req, res) => {
    res.json({message: 'Update goals ' + req.params.id})
}

// @desc Delete goals 
// @route DELECT /api/goals/:id
// @access Private
const deleteGoals = async (req, res) => {
    res.json({message: 'Delete goals ' + req.params.id})
}

module.exports = {
    getGoals, 
    setGoals, 
    updateGoals, 
    deleteGoals
}