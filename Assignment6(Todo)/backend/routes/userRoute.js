const { Router } = require("express");
const userRoute = Router();
const dotenv = require("dotenv");
dotenv.config();
const {userModel} = require("../db/db")
const {userMiddleware} = require("../middlewares/userMiddleware");
const jwt = require("jsonwebtoken");

userRoute.post("/register", async (req, res, next) => {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).json({ error: "One or more fields are empty"});
    }
    
    const alreadyExists =  await userModel.findOne({ username });

    try{
        
        if(alreadyExists) {
            return res.status(409).json({ error: "Username already exist! Try again!!"});
        }
    
        await userModel.create({ username, password });
        console.log("User registered successfully with username: " + username);

        return res.status(201).json({
            success: true,
            message: "User registered successfully"
        });
        console.log("Inside try block of register route");

    } catch(e) {
        console.log("Register route catch block with error ('+e+')");
    }
})



userRoute.post("/login", async (req, res, next) => {
    const {username , password} = req.body;

    if(!username || !password) {
        return res.status(400).json({ error: "One or more fields are empty"});
    }

    try {

        const verify = await userModel.findOne({ username, password });
        if(!verify) {
            return res.status(401).json({ error: "Invalid username or password"});
        }
        if(verify) {
            const token = jwt.sign(
                { username },
                process.env.JWT_SECRET, 
                { expiresIn: "1h" }
            );
            console.log("User logged in successfully with username: " + username + " and token : " + token);
            res.status(200).json({
                success: true,
                message: "User logged in successfully",
                token
            });
        }
    } catch(e) {
        console.log("Login route catch block with error : " + e);
    }
})



userRoute.get("/me", userMiddleware, async (req, res, next) => {

})

module.exports = userRoute;