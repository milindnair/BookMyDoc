import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

const acceptButtonStyle = {
  background: '#3931A4ff', // Background color for accept button
  color: 'white',
  fontFamily: 'Manrope, sans-serif', // Use Manrope font
  fontWeight: 600, // Font weight for accept button
  marginRight: '8px', // Margin between buttons
};

const rejectButtonStyle = {
  background: '#FF4444', // Background color for reject button
  color: 'white',
  fontFamily: 'Manrope, sans-serif', // Use Manrope font
  fontWeight: 600, // Font weight for reject button
};

// Sample data for appointments
const appointmentsData = [
  { patient: 'John Doe', timing: '9:00 AM', id: 1 },
  { patient: 'Jane Smith', timing: '10:30 AM', id: 2 },
  { patient: 'Alice Johnson', timing: '2:15 PM', id: 3 },
];

function Appointments() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
      <Typography variant="h5" style={headerStyle}>
        Appointments
      </Typography>
      <Stack spacing={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {appointmentsData.map((appointment) => (
          <Item key={appointment.id} sx={{ margin: '8px' }}>
            <div>
              <div style={{ fontWeight: 600 }}>{appointment.patient}</div>
              <div style={{ fontWeight: 600 }}>{appointment.timing}</div>
            </div>
            <div>
              <Button variant="contained" style={acceptButtonStyle}>
                Accept
              </Button>
              <Button variant="contained" style={rejectButtonStyle}>
                Reject
              </Button>
            </div>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}

export default Appointments;
