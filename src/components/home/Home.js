import React, { useEffect, useState } from 'react';
import { getCareHomeDetails, getPatientDetails, getPatientGpDetails } from '../../action/action';
import { useDispatch, useSelector } from 'react-redux';
import transformPatientDetails from '../../utlis/Transform';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareHomeDetails());
    dispatch(getPatientDetails());
    dispatch(getPatientGpDetails());
  }, [dispatch]);

  const careHomeDetails = useSelector(state => state.careHomeReducer?.careHomeDetails);
  const patientDetails = useSelector(state => state.patientReducer?.patientDetails);
  const patientGpDetails = useSelector(state => state.patientGpReducer?.patientGpDetails);

  const filterPatientPracticeDetails = patientDetails.map(item => {
    const findPracticeDetails = patientGpDetails.find(element => element.patientId === item.id);
    return {
      id: item.id,
      careHomeId: item.careHomeId,
      firstName: item.firstName,
      lastName: item.lastName,
      patientPractice:
        findPracticeDetails &&
        findPracticeDetails.patientPracticeDetails &&
        findPracticeDetails.patientPracticeDetails.length > 0 &&
        findPracticeDetails.patientPracticeDetails[0].name,
    };
  });

  const transformDetails = transformPatientDetails(careHomeDetails, filterPatientPracticeDetails);
  console.log({ patientGpDetails });
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
                      <li>
                        <Link to={`/patients/${element.id}`} state={{ patientDetails: element }}>
                          {element.firstName + ' ' + element.lastName}
                        </Link>
                        <span className="patient-practice">
                          GP practice(s): {element.patientPractice ? element.patientPractice : '-'}
                        </span>
                      </li>
                    </ul>
                  ))}
              </li>
            </ul>
          ))}
      </section>
    </div>
  );
}
