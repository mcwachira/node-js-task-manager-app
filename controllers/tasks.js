const asyncWrapper = require('../middleware/async')
const Task = require('../models/Task')




const getAllTasks = asyncWrapper(async (req, res) => {


    const tasks = await Task.find({})
    res.status(200).json({ tasks })
    //res.status(200).json({tasks, amount:tasks.length})
    //res.status(200).json({ status:'success', data:{tasks}  })

}
)

const getTask = async (req, res) => {

    try {

        //destructure the id and give it an alias
        const { id: taskID } = req.params
        const task = await Task.findOne({
            _id: taskID
        });
        if (!task) {
            return res.status(404).json(`no task with that id ${taskID} exist`)
        }
        return res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }


}


const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (error) {

        res.status(500).json({ msg: error })
    }


}



const updateTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json(`no task with that id ${taskID} exist`)
        }
        return res.status(200).json({ task })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
}
const deleteTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json(`no task with that id ${taskID} exist`)
        }
        return res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }


    // return res.send('this are all the deleted tasks')
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks,
};