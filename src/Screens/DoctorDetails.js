import React from "react";
import { Dialog, Card, CardHeader, CardContent, Typography, Paper } from "@mui/material";

const DoctorDetails = ({ open, handleClose, doctor }) => {
    return(
        <Dialog open={open} onClose={handleClose}>
        <Paper 
            elevation={3}
            style={{
                textAlign: 'left',
                margin: '15px',
                padding: '20px',
                cursor: 'pointer'
            }}
        >
            <Card>
                <CardHeader 
                title={
                    <Typography variant="h6" style={{ fontWeight: 'bold'}}>DoctorDetails</Typography>
                }
                style={{
                    backgroundColor: 'purple',
                    height: '70px',
                    padding: '11px',
                    color: 'white',
                }}
                />
                <CardContent>
                    <Typography variant="subtitle1"><strong>Dr:</strong> {doctor.name}</Typography>
                    <Typography variant="subtitle1"><strong>Total Experience:</strong> {doctor.experience} years</Typography>
                    <Typography variant="subtitle1"><strong>Speciality:</strong> {doctor.speciality}</Typography>
                    <Typography variant="subtitle1"><strong>Date of Birth:</strong> {doctor.dob}</Typography>
                    <Typography variant="subtitle1"><strong>City:</strong> {doctor.city}</Typography>
                    <Typography variant="subtitle1"><strong>Email:</strong> {doctor.email}</Typography>
                    <Typography variant="subtitle1"><strong>Mobile:</strong> {doctor.mobile}</Typography>
                    <Typography variant="subtitle1">
                    <strong>Rating:</strong>{' '}
                    {'⭐'.repeat(Math.round(doctor.rating))} {/* e.g. 4.8 => ⭐⭐⭐⭐ */}
                    </Typography>
          </CardContent>
            </Card>
        </Paper>
        </Dialog>
    )
}




export default DoctorDetails;