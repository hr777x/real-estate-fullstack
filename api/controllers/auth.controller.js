import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';


export const register = async(req, res) => {
    const { username, email, password } = req.body;
    try {
        
    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    });
    console.log(newUser);
    res.status(201).json({ message: 'User created successfully' });
} catch (error) {
        res.status(500).json({ message: error.message });
}
};

export const login = async(req, res) => {
const age = 1000 * 60 * 60 * 24 * 7;
    const { username, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {username}
        });
        if(!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if(err) {
                return res.status(500).json({ message: err.message });
            }
            res.cookie("token", token, { 
                httpOnly: true,
                secure: true,
                maxAge: age
                 }).status(200).json({ message: 'Login successful'});
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    try {
    res.clearCookie('token').status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};