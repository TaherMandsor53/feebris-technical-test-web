const transformPatientDetails = (careData, patientData) => {
  return (
    careData &&
    careData.map(item => {
      let filterPatientDetails = patientData && patientData.filter(element => element.careHomeId === item.id);
      return {
        careHomeId: item.id,
        careHomeName: item.name,
        patientDetails: filterPatientDetails && filterPatientDetails,
      };
    })
  );
};

export default transformPatientDetails;
