import express from "express";
import bcrypt from "bcrypt";
import { getDb } from "../database/database.js";

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { login, password } = req.body;

        if (!login || !password) {
            return res.status(400).json({ success: false, error: "login and password required" });
        }

        const db = getDb();
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.run(
            `INSERT INTO users(login, password) VALUES(?,?)`,
            [login, hashedPassword]
        );



        console.log("SAVE SUCCESS");
        return res.json({ success: true, message: "Register" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: "Server error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { login, password } = req.body;

        if (!login || !password) {
            return res.status(400).json({ success: false, error: "login and password required" });
        }

        const db = getDb();
        const user = await db.get(`SELECT * FROM users WHERE login = ?`, [login]);

        if (!user) {
            return res.status(401).json({ success: false, error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, error: "Invalid password" });
        }

        return res.json({ success: true, message: "Auth success!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: "Server error" });
    }
});

export default router;