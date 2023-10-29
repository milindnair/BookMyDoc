import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#D3DCFEff', // Background color for each item
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '80%',
  borderRadius: 12,
  fontFamily: 'Manrope, sans-serif', // Use Manrope font
  boxShadow: 'none', // Remove shadow
}));

const headerStyle = {
  textAlign: 'center',
  padding: '16px',
  fontWeight: 600, // Font weight for header text
  fontSize: '44px', // Font size for header text
  marginBottom: '16px', // Add margin below the header
};

const patientItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

// Sample data for patients
const patientsData = [
  { name: 'Patient 1', timing: '10:00 AM - 11:00 AM', hours: '2 hours', id: 1 },
  { name: 'Patient 2', timing: '2:00 PM - 3:30 PM', hours: '1.5 hours', id: 2 },
  { name: 'Patient 3', timing: '3:45 PM - 4:30 PM', hours: '45 minutes', id: 3 },
];

function Patients() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
      <Typography variant="h5" style={headerStyle}>
        Patients
      </Typography>
      <Stack spacing={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {patientsData.map((patient) => (
          <Item key={patient.id} sx={{ margin: '8px' }}>
            <div style={patientItemStyle}>
              <div style={{ fontWeight: 600 }}>{patient.name}</div>
              <div>
                <strong>Timing:</strong> {patient.timing}
              </div>
              <div>
                <strong>Consultation Hours:</strong> {patient.hours}
              </div>
            </div>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}

export default Patients;
