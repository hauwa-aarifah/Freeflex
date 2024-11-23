import React, { useState } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import Step1 from '../components/FormSteps/Step1';
import Step2 from '../components/FormSteps/Step2';
import Step3 from '../components/FormSteps/Step3';
import Step4 from '../components/FormSteps/Step4';
import Step5 from '../components/FormSteps/Step5';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
    step4Data: {},
    step5Data: {},
  });

  const navigate = useNavigate();

  const handleDataUpdate = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  const handleSubmit = () => {
    console.log('Final Form Data:', formData);

    const csvContent = `data:text/csv;charset=utf-8,${Object.keys(formData)
      .map((key) => `${key},${JSON.stringify(formData[key])}`)
      .join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'form_data.csv');
    document.body.appendChild(link);
    link.click();

    navigate('/dashboard');
  };

  return (
    <div className="get-started">
      <Routes>
        <Route path="/" element={<Navigate to="/get-started/step1" />} />
        <Route
          path="/step1"
          element={<Step1 onNext={(data) => { handleDataUpdate('step1Data', data); navigate('/get-started/step2'); }} />}
        />
        <Route
          path="/step2"
          element={<Step2 onNext={(data) => { handleDataUpdate('step2Data', data); navigate('/get-started/step3'); }} onBack={() => navigate('/get-started/step1')} />}
        />
        <Route
          path="/step3"
          element={<Step3 onNext={(data) => { handleDataUpdate('step3Data', data); navigate('/get-started/step4'); }} onBack={() => navigate('/get-started/step2')} />}
        />
        <Route
          path="/step4"
          element={<Step4 onNext={(data) => { handleDataUpdate('step4Data', data); navigate('/get-started/step5'); }} onBack={() => navigate('/get-started/step3')} />}
        />
        <Route
          path="/step5"
          element={<Step5 onSubmit={handleSubmit} onBack={() => navigate('/get-started/step4')} />}
        />
      </Routes>
    </div>
  );
};

export default GetStarted;
