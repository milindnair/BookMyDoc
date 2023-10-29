import express from "express";
import { register, login } from '../Controllers/authController.js';
import { fetchFalseSlots, fetchTrueSlots, registerAppointment } from "../Controllers/appoitmentController.js";


const router = express.Router()

router.get('/fetchTrue', fetchTrueSlots)
router.get('/fetchFalse', fetchFalseSlots)


router.post('/register', register)
router.post('/login',login)
router.post('/registerAppoitment/:email', registerAppointment)

export default router