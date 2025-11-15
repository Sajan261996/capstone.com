import React, { useState } from 'react';
import '../Home/Home.css';
import BookAppointment from '../Screens/BookAppointment';
import DoctorDetails from './DoctorDetails';

const doctors = [
  { id: 1, name: 'Ocean Garner', speciality: 'PULMONOLOGIST', rating: 5, experience: 10, dob: '1990-06-12', city: 'Paris', email: 'ocean@example.com', mobile: '1234567890' },
  { id: 2, name: 'Kennan Hess', speciality: 'GENERAL_PHYSICIAN', rating: 4, experience: 8, dob: '1985-08-24', city: 'Berlin', email: 'kennan@example.com', mobile: '0987654321' },
  { id: 3, name: 'Blossom Valentine', speciality: 'PULMONOLOGIST', rating: 5, experience: 12, dob: '1982-03-10', city: 'Rome', email: 'blossom@example.com', mobile: '5678901234' },
];

const DoctorsList = () => {
  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [speciality, setSpeciality] = useState(""); // <-- STATE ADDED

  const handleOpen = (doctor, type) => {
    setSelectedDoctor(doctor);
    setModalType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDoctor(null);
    setModalType(null);
  };

  // ✅ FILTERING LOGIC HERE
  const filteredDoctors = speciality
    ? doctors.filter((doc) => doc.speciality === speciality)
    : doctors;

  return (
    <div className='home-container'>
      
      {/* FILTER DROPDOWN */}
      <div className='filter-section'>
        <label htmlFor='speciality'>Selected Speciality</label>
        <select
          id='speciality'
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)} // <-- EVENT ADDED
        >
          <option value=''>---Select---</option>
          <option value='PULMONOLOGIST'>PULMONOLOGIST</option>
          <option value='GENERAL_PHYSICIAN'>GENERAL_PHYSICIAN</option>
        </select>
      </div>

      {/* SHOW FILTERED DATA */}
      <div className='doctors-list'>
        {filteredDoctors.length === 0 ? (
          <p>No doctors found for selected speciality.</p>
        ) : (
          filteredDoctors.map((doc) => (
            <div key={doc.id} className='doctors-card'>
              <h3>Doctor Name : {doc.name}</h3>
              <p>Speciality : {doc.speciality}</p>
              <p>
                Rating:{' '}
                {Array.from({ length: doc.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </p>

              <div className='button-group'>
                <button className='appointment-btn' onClick={() => handleOpen(doc, 'appointment')}>
                  Book Appointment
                </button>

                <button className='details-btn' onClick={() => handleOpen(doc, 'details')}>
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODALS */}
      {selectedDoctor && modalType === 'appointment' && (
        <BookAppointment open={open} handleClose={handleClose} doctor={selectedDoctor} />
      )}

      {selectedDoctor && modalType === 'details' && (
        <DoctorDetails open={open} handleClose={handleClose} doctor={selectedDoctor} />
      )}
    </div>
  );
};

export default DoctorsList;
