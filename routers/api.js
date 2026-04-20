import express from "express";

const router = express.Router();

router.post('/register', (req, res) => {
    const {login, password} = req.body;
    if(login === "12345" && password === "12345"){
        res.json({success: true, message: "Register"});
    }
    else{
        res.json({success: false, error: "No!"});
    }
});

router.post('/login', (req, res) => {
    const {login, password} = req.body;
    if(login === "12345" && password === "12345"){
        res.json({success: true, message: "Good boy"});
    }
    else{
        res.json({success: false, error: "Bad Boy"});
    }
});

export default router;