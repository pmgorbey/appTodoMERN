const { Router } = require('express');
const User = require('../models/User');
const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const isUsed = await User.findOne({email});
        if (isUsed) {
            return res.status(300).json({message: 'This Email already exist ...'});
        }

        const user = new User({
            email,
            password
        });

        await user.save();

        res.status(201).json({message: 'User created ...'});
    } catch(err) {
        console.log(err);
    }
}); 


module.exports = router;