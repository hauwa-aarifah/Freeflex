// src/pages/GetStarted.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

import Step1 from '../components/FormSteps/Step1';
import Step2 from '../components/FormSteps/Step2';
import Step3 from '../components/FormSteps/Step3';
import Step4 from '../components/FormSteps/Step4';
import Step5 from '../components/FormSteps/Step5';
import Dashboard from './Dashboard';

const GetStarted = () => {
  const { isLoggedIn, isGuest, user, loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    step2Data: {},
    step3Data: {},
    step4Data: {},
    step5Data: {},
  });

  useEffect(() => {
    const loadSavedData = () => {
      if (isGuest && user?.formData) {
        setFormData(user.formData);
      } else {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
          try {
            const parsedData = JSON.parse(savedData);
            console.log('Loaded saved data:', parsedData);
            setFormData(parsedData);
          } catch (error) {
            console.error('Error loading saved data:', error);
            localStorage.removeItem('formData');
          }
        }
      }
    };

    loadSavedData();
  }, [isGuest, user]);

  const handleDataUpdate = (step, data) => {
    console.log(`Updating ${step} with data:`, data);
    setFormData(prevData => {
      const updatedData = {
        ...prevData,
        [step]: data
      };

      if (!isGuest) {
        localStorage.setItem('formData', JSON.stringify(updatedData));
      }

      console.log('Updated form data:', updatedData);
      return updatedData;
    });
  };

  const handleSubmit = async () => {
    try {
      console.log('Preparing to submit form data:', formData);

      const submissionData = {
        ...formData,
        userId: isLoggedIn ? user.id : null,
        userType: isLoggedIn ? 'registered' : 'guest'
      };

      console.log('Submitting data to backend:', submissionData);

      const response = await axios.post('http://localhost:8000/submit', submissionData);
      console.log('Backend response:', response.data);

      if (!isLoggedIn && !isGuest) {
        loginAsGuest({
          formData: submissionData,
          submissionId: response.data.submissionId || null
        });
      }

      if (isLoggedIn) {
        localStorage.removeItem('formData');
      }

      navigate('/dashboard', {
        state: {
          formData: submissionData,
          backendResponse: response.data
        }
      });

    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit data. Please try again.');
    }
  };

  return (
    <div className="get-started">
      <Routes>
        <Route path="/" element={<Navigate to="/get-started/step1" replace />} />
        
        <Route
          path="/step1"
          element={
            <Step1 
              onNext={() => navigate('/get-started/step2')}
            />
          }
        />

        <Route
          path="/step2"
          element={
            <Step2
              onNext={(data) => {
                console.log('Step 2 data:', data);
                handleDataUpdate('step2Data', data);
                navigate('/get-started/step3');
              }}
              onBack={() => navigate('/get-started/step1')}
              initialData={formData.step2Data}
            />
          }
        />

        <Route
          path="/step3"
          element={
            <Step3
              onNext={(data) => {
                console.log('Step 3 data:', data);
                handleDataUpdate('step3Data', data);
                navigate('/get-started/step4');
              }}
              onBack={() => navigate('/get-started/step2')}
              initialData={formData.step3Data}
              selectedIndustry={formData.step2Data?.industry || ''}
            />
          }
        />

        <Route
          path="/step4"
          element={
            <Step4
              onNext={(data) => {
                console.log('Step 4 data:', data);
                handleDataUpdate('step4Data', data);
                navigate('/get-started/step5');
              }}
              onBack={() => navigate('/get-started/step3')}
              initialData={formData.step4Data}
            />
          }
        />

        <Route
          path="/step5"
          element={
            <Step5
              onNext={(data) => {
                console.log('Step 5 data:', data);
                handleDataUpdate('step5Data', data);
                handleSubmit();
              }}
              onBack={() => navigate('/get-started/step4')}
              initialData={formData.step5Data}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard 
              key={user?.id || 'guest'}
            />
          }
        />
      </Routes>

      {isGuest && (
        <div 
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1rem',
            backgroundColor: 'rgba(222, 254, 127, 0.1)',
            textAlign: 'center',
            color: '#fff',
            zIndex: 1000
          }}
        >
          <p>
            You're using FreeFlex as a guest.
            <button
              onClick={() => navigate('/login')}
              style={{
                marginLeft: '1rem',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                backgroundColor: '#DEFE7F',
                color: '#111',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Create Account
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default GetStarted;