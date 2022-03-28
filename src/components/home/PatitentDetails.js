import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PatientDetails() {
  const { state } = useLocation();
  const patientDetails = state?.patientDetails;
  const patientCheckupDetails = state?.patientDetails?.patientCheckup;
  return (
    <div className="patient-main">
      <header className="patient-header">
        <h1>Patient Checkup Details</h1>
      </header>

      <section className="patient-section">
        <h4>{patientDetails?.firstName + ' ' + patientDetails?.lastName}</h4>
        {patientCheckupDetails &&
          patientCheckupDetails.length > 0 &&
          patientCheckupDetails.map(item => (
            <ul>
              <li>Created: {item.createdAt}</li>
            </ul>
          ))}
      </section>
    </div>
  );
}
