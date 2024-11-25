import React, { useState } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Step1 from '../components/FormSteps/Step1';
import Step2 from '../components/FormSteps/Step2';
import Step3 from '../components/FormSteps/Step3';
import Step4 from '../components/FormSteps/Step4';
import Step5 from '../components/FormSteps/Step5';
import Dashboard from './Dashboard';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    step2Data: {}, // Step1 doesn't collect data, so it's excluded
    step3Data: {},
    step4Data: {},
    step5Data: {},
  });

  const navigate = useNavigate();

  // Update the form data as users progress through steps
  const handleDataUpdate = (step, data) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, [step]: data };
      console.log(`Updated FormData after ${step}:`, updatedData); // Log updated data
      return updatedData;
    });
  };


  // Submit form data to the backend
  const handleSubmit = () => {
    axios
      .post('http://localhost:8000/submit', formData)
      .then((response) => {
        console.log('Response from backend:', response.data);
        navigate('/dashboard', { state: { formData, backendResponse: response.data } });
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
        alert('Failed to submit data to the backend.');
      });
  };

  return (
    <div className="get-started">
      <Routes>
        {/* Redirect base route to Step1 */}
        <Route path="/" element={<Navigate to="/get-started/step1" />} />

        {/* Step1: Overview (No data collection) */}
        <Route
          path="/step1"
          element={<Step1 onNext={() => navigate('/get-started/step2')} />}
        />

        {/* Step2: Collect industry and country */}
        <Route
          path="/step2"
          element={
            <Step2
              onNext={(data) => {
                handleDataUpdate('step2Data', data);
                navigate('/get-started/step3');
              }}
              onBack={() => navigate('/get-started/step1')}
            />
          }
        />

        {/* Step3: Collect skills and experience */}
        <Route
          path="/step3"
          element={
            <Step3
              onNext={(data) => {
                handleDataUpdate('step3Data', data);
                navigate('/get-started/step4');
              }}
              onBack={() => navigate('/get-started/step2')}
              selectedIndustry={formData.step2Data.industry || ''}
            />
          }
        />

        {/* Step4: Collect estimated hours */}
        <Route
          path="/step4"
          element={
            <Step4
              onNext={(data) => {
                handleDataUpdate('step4Data', data);
                navigate('/get-started/step5');
              }}
              onBack={() => navigate('/get-started/step3')}
            />
          }
        />

        {/* Step5: Collect location and working hours */}
        <Route
          path="/step5"
          element={
            <Step5
              onNext={(data) => {
                handleDataUpdate('step5Data', data);
                handleSubmit(); // Submit data on final step
              }}
              onBack={() => navigate('/get-started/step4')}
            />
          }
        />

        {/* Dashboard: Display collected and backend data */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default GetStarted;
