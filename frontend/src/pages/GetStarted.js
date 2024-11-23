// import React, { useState } from 'react';
// import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios
// import Step1 from '../components/FormSteps/Step1';
// import Step2 from '../components/FormSteps/Step2';
// import Step3 from '../components/FormSteps/Step3';
// import Step4 from '../components/FormSteps/Step4';
// import Step5 from '../components/FormSteps/Step5';
// import Dashboard from './Dashboard';

// const GetStarted = () => {
//   const [formData, setFormData] = useState({
//     step1Data: {},
//     step2Data: {},
//     step3Data: {},
//     step4Data: {},
//     step5Data: {},
//   });

//   const navigate = useNavigate();

//   const handleDataUpdate = (step, data) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [step]: data,
//     }));
//   };

//   const handleSubmit = () => {
//     axios
//       .post('http://localhost:8000/submit', formData) // Send data to the backend
//       .then((response) => {
//         console.log('Response from backend:', response.data); // Log backend response
//         navigate('/dashboard', { state: { formData, backendResponse: response.data } }); // Navigate to Dashboard
//       })
//       .catch((error) => {
//         console.error('Error submitting data:', error); // Log submission error
//         alert('Failed to submit data to the backend.'); // Optional alert
//       });
//   };

//   return (
//     <div className="get-started">
//       <Routes>
//         <Route path="/" element={<Navigate to="/get-started/step1" />} />
//         <Route
//           path="/step1"
//           element={
//             <Step1
//               onNext={(data) => {
//                 handleDataUpdate('step1Data', data);
//                 navigate('/get-started/step2');
//               }}
//             />
//           }
//         />
//         <Route
//           path="/step2"
//           element={
//             <Step2
//               onNext={(data) => {
//                 handleDataUpdate('step2Data', data);
//                 navigate('/get-started/step3');
//               }}
//               onBack={() => navigate('/get-started/step1')}
//             />
//           }
//         />
//         <Route
//           path="/step3"
//           element={
//             <Step3
//               onNext={(data) => {
//                 handleDataUpdate('step3Data', data);
//                 navigate('/get-started/step4');
//               }}
//               onBack={() => navigate('/get-started/step2')}
//               selectedIndustry={formData.step2Data.industry || ''}
//             />
//           }
//         />
//         <Route
//           path="/step4"
//           element={
//             <Step4
//               onNext={(data) => {
//                 handleDataUpdate('step4Data', data);
//                 navigate('/get-started/step5');
//               }}
//               onBack={() => navigate('/get-started/step3')}
//             />
//           }
//         />
//         <Route
//           path="/step5"
//           element={
//             <Step5
//               onSubmit={() => handleSubmit()}
//               onBack={() => navigate('/get-started/step4')}
//             />
//           }
//         />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </div>
//   );
// };

// export default GetStarted;

import React, { useState } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Step1 from '../components/FormSteps/Step1';
import Step2 from '../components/FormSteps/Step2';
import Step3 from '../components/FormSteps/Step3';
import Step4 from '../components/FormSteps/Step4';
import Step5 from '../components/FormSteps/Step5';
import Dashboard from './Dashboard';

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
    axios
      .post('http://localhost:8000/submit', formData) // Send data to the backend
      .then((response) => {
        console.log('Response from backend:', response.data); // Log backend response
        navigate('/dashboard', { state: { formData, backendResponse: response.data } }); // Navigate to Dashboard
      })
      .catch((error) => {
        console.error('Error submitting data:', error); // Log submission error
        alert('Failed to submit data to the backend.'); // Optional alert
      });
  };

  return (
    <div className="get-started">
      <Routes>
        <Route path="/" element={<Navigate to="/get-started/step1" />} />
        <Route
          path="/step1"
          element={
            <Step1
              onNext={(data) => {
                handleDataUpdate('step1Data', data);
                navigate('/get-started/step2');
              }}
            />
          }
        />
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
        <Route
          path="/step5"
          element={
            <Step5
              onNext={(data) => {
                handleDataUpdate('step5Data', data);
                handleSubmit();
              }}
              onBack={() => navigate('/get-started/step4')}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default GetStarted;
