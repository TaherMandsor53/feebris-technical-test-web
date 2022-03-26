import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PatientDetails() {
  const { state } = useLocation();
  console.log({ state });
  return <div>Patient Details</div>;
}
