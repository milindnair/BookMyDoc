import User from '../models/userModel.js';
import Doctor from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JTW_SECRET_key, {
        expiresIn: '15d',
    });
};

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;
    console.log('register');
    try {
        let user = null;
        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }
        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
                
            });

        }
        await user.save();
        res.status(200).json({ success: true, message: 'User successfully created' });
    } catch (err) {
        console.error(err);
        res.status(200).json({ success: false, message: 'Server Error, try again' });
    }
};

export const login = async (req, res) => {
    const { email} = req.body;
    try {
        let user = null;
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // compare password
        console.log(user);
        console.log("entered password: " + req.body.password);
        console.log("saved password: " + user.password);
        const isPasswordMatch = await bcrypt.compare(req.body.password.trim(), user.password.trim());


        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: 'Invalid credentials' });
        }

        const token = generateToken(user);

        const { password, role, appointments, ...rest } = user._doc;
        res
            .status(200)
            .json({ status: true, message: 'Successfully Login', token, data: { ...rest } });
    } catch (err) {
        res.status(500).json({ status: false, message: 'Failed to login' });
    }
};
