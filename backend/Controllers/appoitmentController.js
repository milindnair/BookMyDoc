import Doctor from "../models/doctorModel.js";

export async function registerAppointment(req, res) {
    try {
      const { email } = req.params;
      const { date, time, healthConditions, gender, status } = req.body;
  
      // Find the doctor by email
      const doctor = await Doctor.findOne({ email });
  
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      // Convert the date string to a JavaScript Date object
      const appointmentDate = new Date(date);
  
      // Check if the date already exists in bookings
      const existingDateIndex = doctor.bookings.findIndex(b => b.date.toISOString() === appointmentDate.toISOString());
  
      if (existingDateIndex !== -1) {
        // Date exists, push a new slot to the respective array based on status
        const slot = { time, healthConditions, gender, status };
        doctor.bookings[existingDateIndex].slots[status ? 'true' : 'false'].push(slot);
      } else {
        // Date doesn't exist, create a new date entry with a new slot in the respective array based on status
        const slot = { time, healthConditions, gender, status };
        const newBooking = {
          date: appointmentDate,
          slots: {
            [status ? 'true' : 'false']: [slot],
            [status ? 'false' : 'true']: [], // Initialize the other array as empty
          },
        };
        doctor.bookings.push(newBooking);
      }
  
      // Save the updated doctor data
      await doctor.save();
  
      return res.status(200).json({ message: 'Appointment registered successfully', doctor });
    } catch (error) {
      console.error('Error registering appointment:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  export async function fetchTrueSlots(req, res) {
    try {
        const { email } = req.query;
   
  
      const doctor = await Doctor.findOne({ email });
  
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      const trueSlots = doctor.bookings.reduce((accumulator, booking) => {
        return accumulator.concat(booking.slots.true);
      }, []);
  
      return res.status(200).json({ trueSlots });
    } catch (error) {
      console.error('Error fetching true slots:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  
  export async function fetchFalseSlots(req, res) {
    try {
      const { email } = req.query; // Use req.query to get parameters from the query string
      console.log(email);
  
      const doctor = await Doctor.findOne({ email });
  
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      const falseSlots = doctor.bookings.reduce((accumulator, booking) => {
        return accumulator.concat(booking.slots.false);
      }, []);
  
      return res.status(200).json({ falseSlots });
    } catch (error) {
      console.error('Error fetching false slots:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  
  
  


