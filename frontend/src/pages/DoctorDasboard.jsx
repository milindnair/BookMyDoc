import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Sidebar, { SidebarItem } from '../components/Sidebar/sidebar';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import DoctorCard from '../components/Doctor/DoctorCard';
import Appointments from '../components/Sidebar/appointments';
import Patients from '../components/Sidebar/patients';
import { LogOutIcon } from 'lucide-react';
import { doctors } from '../../src/assets/data/doctors'; // Import the doctors data

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [doctor, setDoctor] = useState(null); // Initialize doctor state as null
  const [currentComponent, setCurrentComponent] = useState('MyProfile');

  const handleLogout = () => {
    // Implement the logout logic here
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleComponentChange = (componentName) => {
    setCurrentComponent(componentName);
  };

  useEffect(() => {
    // Fetch the doctor's appointments from the server
    // Replace the URL with your actual endpoint
    axios.get('YOUR_API_ENDPOINT_HERE')
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  // Select one doctor from the doctors array
  useEffect(() => {
    setDoctor(doctors[1]); // You can select a different doctor by changing the index
  }, []);

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<PersonIcon />}
          text="My Profile"
          active={currentComponent === 'MyProfile'}
          alert={false}
          onClick={() => handleComponentChange('MyProfile')}
        />
        <SidebarItem
          icon={<EventIcon />}
          text="Appointments"
          active={currentComponent === 'Appointments'}
          alert={true}
          onClick={() => handleComponentChange('Appointments')}
        />
        <SidebarItem
          icon={<PeopleIcon />}
          text="Patients"
          active={currentComponent === 'Patients'}
          alert={false}
          onClick={() => handleComponentChange('Patients')}
        />
        <SidebarItem
          icon={<LogOutIcon />}
          text="Log Out"
          active={currentComponent === 'LogOut'}
          alert={false}
          onClick={() => handleComponentChange('LogOut')}
        />
      </Sidebar>
      {currentComponent === 'MyProfile' && doctor && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{ fontSize: '44px', fontWeight: 'bold', textAlign: 'center' }}>
            Hello Doctor!
          </div>
          <div>
            <DoctorCard doctor={doctor} />
          </div>
        </div>
      )}
      {currentComponent === 'Appointments' && (
        <Appointments />
      )}
      {currentComponent === 'Patients' && (
        <Patients />
      )}
    </div>
  );
}

export default DoctorDashboard;
