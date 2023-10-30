import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#D3DCFEff',
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '80%',
  borderRadius: 12,
  fontFamily: 'Manrope, sans-serif',
  boxShadow: 'none',
}));

const headerStyle = {
  textAlign: 'center',
  padding: '16px',
  fontWeight: 600,
  fontSize: '44px',
  marginBottom: '16px',
};

const patientItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

function Patients() {
  const [trueSlots, setTrueSlots] = useState([]);

  useEffect(() => {
    const fetchTrueSlotsData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/fetchTrue', {
          params: {
            email: 'zm@gmail.com', 
          },
        });
        const slotsWithRandomTime = response.data.trueSlots.map((patient) => ({
          ...patient,
          consultationTime: getRandomConsultationTime(),
        }));
        setTrueSlots(slotsWithRandomTime);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching true slots:', error);
      }
    };

    fetchTrueSlotsData();
  }, []);

  const getRandomConsultationTime = () => {
    // Generate a random consultation time between 0 and 2 hours
    return Math.floor(Math.random() * 3); // 0, 1, or 2 hours
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
      <Typography variant="h5" style={headerStyle}>
        Patients
      </Typography>
      {trueSlots.length == 0 ? (
        <Typography variant="body1">No patients available.</Typography>
      ) : (
        <Stack spacing={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {trueSlots.map((patient) => (
            <Item key={patient._id} sx={{ margin: '8px' }}>
              <div style={patientItemStyle}>
                <div style={{ fontWeight: 600 }}>{patient.healthConditions}</div>
                <div>
                  <strong>Timing:</strong> {patient.time}
                </div>
                <div>
                  <strong>Gender:</strong> {patient.gender}
                </div>
                <div>
                  <strong>Consultation Time:</strong> {patient.consultationTime} hours
                </div>
              </div>
            </Item>
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default Patients;
