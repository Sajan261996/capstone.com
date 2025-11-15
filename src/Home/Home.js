import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DoctorsList from "../Screens/Doctorslist";
import appointments from "../Screens/Appointment";
import RateAppointment from "../Screens/RateAppointment";
import "./Home.css";

function Home() {
  const location = useLocation();
  const isDoctorPage = location.pathname === "/";
  
  // ✅ State to track which appointment is being rated
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // ✅ Handler to open rating form
  const handleOpen = (appointment) => {
    setSelectedAppointment(appointment);
  };

  return (
    <div className="home-container">
      {isDoctorPage ? (
        <DoctorsList />
      ) : (
        <div className="appointments-list">
          {appointments.map((appt, index) => (
            <div key={index} className="appointmentcard-box">
              <div className="doctor-card">
                <h3>{appt.name}</h3>
                <p><strong>Date:</strong> {appt.date}</p>
                <p><strong>Symptoms:</strong> {appt.symptoms || "N/A"}</p>
                <p><strong>Prior Medical History:</strong> {appt.history || "N/A"}</p>
                
                {/* ✅ Fixed: Use `appt` instead of undefined `doc`, and use correct handler */}
                <button
                  className="Rate-button"
                  onClick={() => handleOpen(appt)}
                >
                  RATE APPOINTMENT
                </button>

                {/* ✅ Conditional rendering of RateAppointment */}
                {selectedAppointment === appt && <RateAppointment />}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;