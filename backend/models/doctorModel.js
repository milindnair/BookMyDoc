import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role:{
      type: String,
      default: 'doctor',
    },
    // specialization: {
    //   type: String,
    //   required: true,
    // },
    // address: {
    //   type: String,
    //   required: true,
    // },
    password: {
      type: String,
      required: true,
    },
    // approved: {
    //   type: Boolean,
    //   default: false,
    // },
    // blocked: {
    //   type: Boolean,
    //   default: false,
    // },
    // imagePath: {
    //   type: String,
    //   default: '',
    // },
    gender:{
      type: String,
      default: '',
    },
    resume: {
      type: String,
      default: '',
    },
    fees: {
      type: Number,
      default: 0,
    },
    // qualification: {
    //   type: String,
    //   required: true,
    // },
    // experience: {
    //   type: String,
    //   required: true,
    // },
    bookings: [
      {
        date: {
          type: Date,
        },
        slots: [
          {
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User', // Reference to the User model
            },
          },
        ],
      },
    ],
    available: [
      {
        date: {
          type: Date, // You can use Date for the date field
        },
        fromTime: {
          type: String, // You can use String for the time fields
        },
        toTime: {
          type: String,
        },
        expiresAt: {
          type: Date, // This field will be used for automatic expiration
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;