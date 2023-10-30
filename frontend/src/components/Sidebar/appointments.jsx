import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

const acceptButtonStyle = {
  background: '#3931A4ff',
  color: 'white',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 600,
  marginRight: '8px',
};

const rejectButtonStyle = {
  background: '#FF4444',
  color: 'white',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 600,
};

function Appointments() {
  const [falseSlots, setFalseSlots] = useState([]);
  const [trueSlots, setTrueSlots] = useState([]);
  const data = {
    email: "zm@gmail.com"
  };

  useEffect(() => {
    const fetchFalseSlotsData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/fetchFalse', {
          params: data,
        });
        setFalseSlots(response.data.falseSlots);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching false slots:', error);
      }
    };

    fetchFalseSlotsData();
  }, []);

  const handleAccept = async (slotId) => {
    try {
      console.log(slotId);
      const response = await axios.post('http://localhost:5000/api/acceptSlot', {slotId });
      setTrueSlots([...trueSlots, response.data.acceptedSlot]);
      setFalseSlots(falseSlots.filter(slot => slot._id !== slotId));
    } catch (error) {
      console.error('Error accepting slot:', error);
    }
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
      <Typography variant="h5" style={headerStyle}>
        Appointments
      </Typography>
      {falseSlots.length == 0 ? (
        <Typography variant="h3">No appointments available.</Typography>
      ) : (
      <Stack spacing={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {falseSlots.map((slot) => (
          <Item key={slot._id} sx={{ margin: '8px' }}>
            <div>
              <div style={{ fontWeight: 600 }}>{slot.healthConditions}</div>
              <div style={{ fontWeight: 600 }}>{slot.time}</div>
              <div style={{ fontWeight: 600 }}>{slot.gender}</div>
            </div>
            <div>
              <Button variant="contained" style={acceptButtonStyle} onClick={() => handleAccept(slot._id)}>
                Accept
              </Button>
              <Button variant="contained" style={rejectButtonStyle}>
                Reject
              </Button>
            </div>
          </Item>
        ))}
      </Stack>
      )}
    </Box>
  );
}

export default Appointments;
