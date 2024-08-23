const { Router } = require('express');
const Todo = require('../models/Todo');

const router = Router();

// Create Todo
router.post('/add', async (req, res) => {
    try {
        const { text, userId } = req.body;

        const todo = await new Todo({
            text,
            owner: userId,
            completed: false,
            important: false
        });

        await todo.save();

        res.json(todo);
    } catch(err) {
        console.log(err);
    }
});

// Get all Todos
router.get('/', async (req, res) => {
    try{
        // Method Axios for get userId
        const { userId } = req.query;

        console.log(userId);
        
        const todo = await Todo.find({ owner: userId });

        res.json(todo);
    } catch(err) {
        console.log(err);
    }
});

//Delete Todo
router.delete('/delete/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete({_id: req.params.id});
        console.log(req.params.id);
        res.json(todo);
    } catch(err) {
        console.log(err);
    }
});

// Completed Todo
router.put('/completed/:id', async (req, res) => {     
    try {
        const todo = await Todo.findOne({_id: req.params.id});
        console.log(todo.completed); 
        
        todo.completed = !todo.completed;
        console.log(todo.completed); 
        await todo.save();

        res.json(todo);

    } catch(err) {
        console.log(err);
    }
});

// Important Todo
router.put('/important/:id', async (req, res) => {     
    try {
        const todo = await Todo.findOne({_id: req.params.id});
        console.log(todo.important); 
        
        todo.important = !todo.important;
        console.log(todo.important); 
        await todo.save();

        res.json(todo);

    } catch(err) {
        console.log(err);
    }
});

module.exports = router;