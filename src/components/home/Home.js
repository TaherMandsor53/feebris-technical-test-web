import React, { useEffect, useState } from 'react';
import { getCareHomeDetails, getPatientDetails } from '../../action/action';
import { useDispatch, useSelector } from 'react-redux';
import transformPatientDetails from '../../utlis/Transform';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareHomeDetails());
    dispatch(getPatientDetails());
  }, [dispatch]);

  const careHomeDetails = useSelector(state => state.careHomeReducer?.careHomeDetails);
  const patientDetails = useSelector(state => state.patientReducer?.patientDetails);
  const transformDetails = transformPatientDetails(careHomeDetails, patientDetails);
  console.log({ careHomeDetails });
  console.log({ patientDetails });
  console.log({ transformDetails });

  return (
    <div className="home-main">
      <header className="home-header">
        <h1>Care Homes</h1>
      </header>

      <section className="care-home-section">
        {transformDetails &&
          transformDetails.map(item => (
            <ul key={item.id}>
              <li>
                <h4>{item.careHomeName}</h4>
                {item.patientDetails &&
                  item.patientDetails.map(element => (
                    <ul key={element.id}>
                      <li>{element.firstName + ' ' + element.lastName}</li>
                    </ul>
                  ))}
              </li>
            </ul>
          ))}
      </section>
    </div>
  );
}
