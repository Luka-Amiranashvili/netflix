const router = require("express").Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken')

// REGISTER
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields (username, email, password) are required." });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already taken." });
        }

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        });

        const user = await newUser.save();

        res.status(201).json(user);
    } catch (err) {
        console.error("Error during user creation:", err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

//LOGIN
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user) {return res.status(401).json('Wrong password or username!')}

        const bytes = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if(originalPassword !== req.body.password){
            res.status(401).json('Wrong password or username!')};

            const accessToken = jwt.sign({
                id:user._id, isAdmin:user.isAdmin
            }, process.env.SECRET_KEY,{expiresIn:'5d'})

        const {password, ...info} = user._doc;

        return res.status(200).json({...info, accessToken})

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
