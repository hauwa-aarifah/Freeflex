// src/components/FormSteps/Step3.js
const Step3 = ({ onNext, onBack, selectedIndustry, initialData = {} }) => {
  const [inputData, setInputData] = useState(initialData || {
    skills: [],
    experienceLevel: ""
  });

  useEffect(() => {
    // Load saved data if available
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData.step3Data) {
        setInputData(parsedData.step3Data);
      }
    }
  }, []);

  const handleNext = () => {
    if (inputData.skills.length > 0 && inputData.experienceLevel) {
      // Save current step data
      const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
      localStorage.setItem('formData', JSON.stringify({
        ...savedData,
        step3Data: inputData
      }));
      localStorage.setItem('lastStep', 'step3');
      onNext(inputData);
    } else {
      alert("Please select at least one skill and an experience level.");
    }
  };

  // Rest of your Step3 component remains the same
  // Just update the button onClick to use handleNext
};