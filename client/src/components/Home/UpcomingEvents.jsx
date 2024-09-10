import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import { CheckCircle, Error, Info, Warning } from '@mui/icons-material'; // Import icons if needed

const CustomAlert = styled(Alert)(({ theme }) => ({
  '&.MuiAlert-root': {
    backgroundColor: 'black',
    color: 'white',
  },
  '& .MuiAlert-icon': {
    color: 'white', // Ensure the icon color is white
  },
}));

const upcomingEvents = [
  {
    id: '1',
    name: 'Annual Stamp Exhibition',
    description: 'A grand exhibition showcasing rare and unique stamps from around the world.',
    date: '2024-09-15',
  },
  {
    id: '2',
    name: 'Stamp Collectors Meetup',
    description: 'A meetup for stamp enthusiasts to discuss their latest finds and trade stamps.',
    date: '2024-09-20',
  },
  {
    id: '3',
    name: 'Rare Stamp Auction',
    description: 'An auction featuring rare stamps with high historical value.',
    date: '2024-10-05',
  },
];

const UpcomingEvents = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleNotify = (eventName) => {
    setSnackbarMessage(`Notification set for: ${eventName}`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-700 mr-4 mt-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">Upcoming Events</h2>
      <ul className="space-y-4">
        {upcomingEvents.map((event) => (
          <li key={event.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-500 font-medium">{new Date(event.date).toLocaleDateString()}</p>
            </div>
            <button
              onClick={() => handleNotify(event.name)}
              className="ml-4 bg-black text-white text-sm px-3 py-1 rounded-lg hover:bg-gray-800 transition duration-200 ease-in-out"
            >
              Notify
            </button>
          </li>
        ))}
      </ul>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        action={
          <button
            onClick={handleCloseSnackbar}
            className="text-white"
            style={{ backgroundColor: 'black', border: 'none', padding: '0 10px', borderRadius: '4px' }}
          >
            Close
          </button>
        }
      >
        <CustomAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </CustomAlert>
      </Snackbar>
    </div>
  );
};

export default UpcomingEvents;
