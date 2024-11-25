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
  const [formData, setFormData] = useState({
    step2Data: {},
    step3Data: {},
    step4Data: {},
    step5Data: {},
  });

  const navigate = useNavigate();

  // Load saved form data from localStorage if it exists
  useEffect(() => {
    // Check for existing form data
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
    
    // If user is guest, load their saved data
    if (isGuest && user?.formData) {
      setFormData(user.formData);
    }
  }, [isGuest, user]);

  // Update the form data as users progress through steps
  const handleDataUpdate = (step, data) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, [step]: data };
      // Save to localStorage only if not guest
      if (!isGuest) {
        localStorage.setItem('formData', JSON.stringify(updatedData));
      }
      console.log(`Updated FormData after ${step}:`, updatedData);
      return updatedData;
    });
  };

  // Submit form data to the backend
  const handleSubmit = async () => {
    try {
      // Prepare data for submission
      const submissionData = {
        ...formData,
        userId: isLoggedIn ? user.id : null,
        userType: isLoggedIn ? 'registered' : 'guest'
      };

      const response = await axios.post('http://localhost:8000/submit', submissionData);

      console.log('Response from backend:', response.data);

      // If user is not logged in, create guest session
      if (!isLoggedIn && !isGuest) {
        loginAsGuest({
          formData: formData,
          submissionId: response.data.submissionId || null
        });
      }

      // Clear form data from localStorage if user is registered
      if (isLoggedIn) {
        localStorage.removeItem('formData');
      }

      // Navigate to dashboard with response data
      navigate('/dashboard', { 
        state: { 
          formData, 
          backendResponse: response.data 
        } 
      });

    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data to the backend. Please try again.');
    }
  };

  // Save progress before leaving
  const handleBack = (step) => {
    if (!isGuest) {
      localStorage.setItem('lastStep', step);
    }
    navigate(`/get-started/${step}`);
  };

  // Check if user has existing session
  const getInitialStep = () => {
    if (isGuest && user?.formData) {
      return '/dashboard';
    }
    return localStorage.getItem('lastStep') || "/get-started/step1";
  };

  return (
    <div className="get-started">
      <Routes>
        {/* Redirect base route to appropriate step */}
        <Route 
          path="/" 
          element={<Navigate to={getInitialStep()} replace />}
        />

        {/* Step1: Overview */}
        <Route
          path="/step1"
          element={
            <Step1 
              onNext={() => {
                if (!isGuest) {
                  localStorage.setItem('lastStep', 'step2');
                }
                navigate('/get-started/step2');
              }}
              formData={formData}
            />
          }
        />

        {/* Step2: Collect industry and country */}
        <Route
          path="/step2"
          element={
            <Step2
              onNext={(data) => {
                handleDataUpdate('step2Data', data);
                if (!isGuest) {
                  localStorage.setItem('lastStep', 'step3');
                }
                navigate('/get-started/step3');
              }}
              onBack={() => handleBack('step1')}
              initialData={formData.step2Data}
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
                if (!isGuest) {
                  localStorage.setItem('lastStep', 'step4');
                }
                navigate('/get-started/step4');
              }}
              onBack={() => handleBack('step2')}
              initialData={formData.step3Data}
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
                if (!isGuest) {
                  localStorage.setItem('lastStep', 'step5');
                }
                navigate('/get-started/step5');
              }}
              onBack={() => handleBack('step3')}
              initialData={formData.step4Data}
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
                handleSubmit();
              }}
              onBack={() => handleBack('step4')}
              initialData={formData.step5Data}
            />
          }
        />

        {/* Dashboard: Display collected and backend data */}
        <Route 
          path="/dashboard" 
          element={
            <Dashboard 
              key={user?.id || 'guest'} // Force re-render on user change
            />
          } 
        />
      </Routes>

      {/* Optional: Add a banner for guest users */}
      {isGuest && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1rem',
          backgroundColor: 'rgba(222, 254, 127, 0.1)',
          textAlign: 'center',
          color: '#fff'
        }}>
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