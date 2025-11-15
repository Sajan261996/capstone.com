import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Rating
} from '@mui/material';

const RateAppointment = () => {
  // ✅ Fix: Define state variables
  const [comments, setComments] = useState('');
  const [stars, setStars] = useState(4);

  const handleSubmit = () => {
    console.log('Rating Submitted:', { comments, stars });
    // Add your submit logic here (e.g., API call)
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Card sx={{ width: 500, boxShadow: 3 }}>
        <CardHeader
          title="Rate an Appointment"
          sx={{ backgroundColor: 'purple', color: 'white', padding: '10px 16px' }}
        />
        <CardContent>
          <Typography variant="caption" color="primary">Comments</Typography>
          <TextField
            fullWidth
            variant="standard"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Enter your comments"
            InputProps={{ disableUnderline: false }}
            sx={{ mb: 3 }}
          />

          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="body1" mr={1}>
              Rating :
            </Typography>
            <Rating
              name="appointment-rating"
              value={stars}
              onChange={(event, newValue) => {
                setStars(newValue);
              }}
              precision={1}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            RATE APPOINTMENT
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RateAppointment;
