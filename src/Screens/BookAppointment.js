import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BookAppointment = ({ open, handleClose, doctor }) => {
  const [selectDate, setselectDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [erroOpen, setErrorOpen] = useState(false);

  const handleSubmit = () => {
    const appointmentDate = {
      doctorsName: doctor.name,
      date: selectDate,
      timeSlot,
      medicalHistory,
      symptoms,
    };

    const isSlotTaken = true;

    if (isSlotTaken) {
      setErrorOpen(true);
    } else {
      console.log(`Appointment Booked`, appointmentDate);
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <CardHeader
          title={
            <Typography
              variant="h6"
              style={{
                backgroundColor: '#800080',
                color: 'white',
                padding: '12px',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              Book An Appointment
            </Typography>
          }
        />
        <CardContent sx={{ flex: 1, padding: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="Doctor's Name"
                value={doctor.name}
                inputProps={{ readOnly: true }}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Select Date"
                  value={selectDate}
                  onChange={(newDate) => setselectDate(newDate)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                    },
                  }}
                />
              </LocalizationProvider>

              <FormControl fullWidth>
                <InputLabel>Time Slot</InputLabel>
                <Select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  label="Time Slot"
                >
                  <MenuItem value={'08AM-09AM'}>08AM-09AM</MenuItem>
                  <MenuItem value={'10AM-11AM'}>10AM-11AM</MenuItem>
                  <MenuItem value={'12AM-01PM'}>12AM-01PM</MenuItem>
                  <MenuItem value={'01PM-02PM'}>01PM-02PM</MenuItem>
                  <MenuItem value={'02PM-03PM'}>02PM-03PM</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Medical History"
                fullWidth
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
              />

              <TextField
                label="Symptoms"
                fullWidth
                rows={2}
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 1 }}
            >
              BOOK Appointment
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default BookAppointment;
