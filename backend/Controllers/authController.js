import User from '../models/userModel.js';
import Doctor from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


let pass ;

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JTW_SECRET_key, {
        expiresIn: '15d',
    });
};

// export const register = async (req, res) => {
//     const { email, password, name, role, photo, gender } = req.body;
//     console.log('register');
//     try {
//         let user = null;
//         if (role === 'patient') {
//             user = await User.findOne({ email });
//         } else if (role === 'doctor') {
//             user = await Doctor.findOne({ email });
//         }

        
//         if (user) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const hashPassword = await bcrypt.hash(password,10);

//         if (role === 'patient') {
//             user = new User({
//                 name,
//                 email,
//                 password: hashPassword,
//                 photo,
//                 gender,
//                 role,
//             });
//         }
//         if (role === 'doctor') {
//             user = new Doctor({
//                 name,
//                 email,
//                 password: hashPassword,
//                 photo,
//                 gender,
//                 role,
                
//             });

//         }
//         await user.save();
//         res.status(200).json({ success: true, message: 'User successfully created' });
//     } catch (err) {
//         console.error(err);
//         res.status(200).json({ success: false, message: 'Server Error, try again' });
//     }
// };

// export const login = async (req, res) => {
//     const { email} = req.body;
//     try {
//         let user = null;
//         const patient = await User.findOne({ email });
//         const doctor = await Doctor.findOne({ email });

//         if (patient) {
//             user = patient;
//         }
//         if (doctor) {
//             user = doctor;
//         }

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         // compare password
//         console.log(user);
//         console.log("entered password: " + req.body.password);
//         console.log("saved password: " + user.password);
//         const isPasswordMatch = await bcrypt.compare(req.body.password.trim(), user.password.trim());


//         if (!isPasswordMatch) {
//             return res.status(400).json({ status: false, message: 'Invalid credentials' });
//         }

//         const token = generateToken(user);

//         const { password, role, appointments, ...rest } = user._doc;
//         res
//             .status(200)
//             .json({ status: true, message: 'Successfully Login', token, data: { ...rest } });
//     } catch (err) {
//         res.status(500).json({ status: false, message: 'Failed to login' });
//     }
// };


export async function login(req, res) {
    const { email, password , category } = req.body;


    
  
    try {
        let user = null;
        if(category === 'patient'){
            user = await User.findOne({ email }).exec();
        }
        else{
            user = await Doctor.findOne({ email }).exec();
        }
      
      if (!user) {
        return res.status(404).send({ error: "email not Found" });
      }      
  
      const passwordCheck = await bcrypt.compare(password.trim(), user.password);
  
      if (!passwordCheck) {
        console.log(user.password);
        return res.status(400).send({ error: "Password does not match" });
      }
  
    //   const token = jwt.sign(
    //     {
    //       userId: user._id,
    //       email: user.email,
    //     },
    //     ENV.JWT_SECRET,
    //     { expiresIn: "24h" }
    //   );
  
      return res.status(200).send({
        msg: "Login Successful...!",
        data: user,
        status: 200
        // token,
      });
    } catch (error) {
      console.log("Error in login controller:", error);
      return res.status(500).send({ error });
    }
  }
  export async function register(req, res) {
    try {
      const { email, password, name, role, photo, gender } = req.body;
      pass = password;
      // Check if the user already exists
      let existingUser;
      if(role === "doctor"){
         existingUser = await Doctor.findOne({ email }).exec();

      }
      else{
      existingUser = await User.findOne({ email }).exec();

      }
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance based on the role
      let newUser;
      if (role === 'doctor') {
        // Additional fields specific to doctors
        const { specialization, experience } = req.body;
        newUser = new Doctor({
          name,
          email,
          password: hashedPassword,
          photo,
          gender,
          specialization,
          experience,
        });
      } else {
        // Additional fields specific to patients
        const { age, blood, emergency } = req.body;
        newUser = new User({
          name,
          email,
          password: hashedPassword,
          photo,
          gender,
          age,
          blood,
          emergency,
        });
      }
  
      // Save the new user to the database
      await newUser.save();
  
      // Return success response
      res.status(201).json({ msg: 'User registered successfully',status:200,data:newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
