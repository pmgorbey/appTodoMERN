const express = require('express');
const mongoose = require('mongoose');

const AuthRouter = require('./routes/authRouter');
const TodoRouter = require('./routes/todoRouter');

const PORT = process.env.PORT || 5000;
const app = express();

// First
app.use(express.json({extended: true}));

app.use('/api/auth', AuthRouter);
app.use('/api/todo', TodoRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb://user:user123@ac-ikrpgq9-shard-00-00.n2xp3yc.mongodb.net:27017,ac-ikrpgq9-shard-00-01.n2xp3yc.mongodb.net:27017,ac-ikrpgq9-shard-00-02.n2xp3yc.mongodb.net:27017/?ssl=true&replicaSet=atlas-cbw8pa-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');

        app.listen(PORT, () => {console.log(`Server strated on PORT: ${PORT}`);});
    } catch(err) {
        console.log(err);
    }
}

start();