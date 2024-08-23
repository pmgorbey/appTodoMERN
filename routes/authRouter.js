const { Router } = require('express');
const User = require('../models/User');
const router = Router();
// Express-Validator
const {check, validationResult} = require('express-validator');
// Hashing password
const bcrypt = require('bcryptjs');
// Create Token
const jwt = require('jsonwebtoken');

router.post('/register', 
    // Express-Validator
    [
        check('email', 'Incorrect email ...').isEmail(),
        check('password', 'Incorrect password').isLength({min: 6})
    ],
    async (req, res) => {
        try {
            // Express-Validator
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data during register ... '
                });
            }
      
            const { email, password } = req.body;
            console.log(email, password);

            const isUsed = await User.findOne({email});
            if (isUsed) {
                return res.status(300).json({message: 'This Email already exist ...'});
            }

            // Hashing password
            const hashedPassword = await bcrypt.hash(password, 7);

            const user = new User({
                email,
                password: hashedPassword
            });

            await user.save();

            res.status(201).json({message: 'User created ...'});
        } catch(err) {
            console.log(err);
        }
    }
); 

router.post('/login', 
    // Express-Validator
    [
        check('email', 'Incorrect email ...').isEmail(),
        check('password', 'Incorrect password').exists()
    ],
    async (req, res) => {
        try {
            // Express-Validator
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data during register ... '
                });
            }
      
            const { email, password } = req.body;

            console.log(email, password);
            
            const user = await User.findOne({email});

            // Check Email
            if (!user) {
                return res.status(400).json({message: 'This Email not found ...'});
            }
            // Check Password
            const isMatch = bcrypt.compare(password, user.password);
            console.log(isMatch);
            if (!isMatch) {
                return res.status(400).json({message: 'Password is incorrect ...'});
            }
            // Secret Key
            const jwtSecret = 'Jkljkljkljkl';
            // Create Token
            const token = jwt.sign(
                {userId: user.id},
                jwtSecret,
                {expiresIn: '1h'}
            );

            res.json({token, userId: user.id});

        } catch(err) {
            console.log(err);
        }
    }
);


module.exports = router;