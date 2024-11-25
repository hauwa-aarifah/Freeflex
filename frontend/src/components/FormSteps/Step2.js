// src/components/FormSteps/Step2.js
const Step2 = ({ onNext, onBack, initialData = {} }) => {
  const [inputData, setInputData] = useState(initialData || {
    industry: "",
    country: ""
  });

  useEffect(() => {
    // Load saved data if available
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData.step2Data) {
        setInputData(parsedData.step2Data);
      }
    }
  }, []);

  const handleNext = () => {
    if (inputData.industry && inputData.country) {
      // Save current step data
      const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
      localStorage.setItem('formData', JSON.stringify({
        ...savedData,
        step2Data: inputData
      }));
      localStorage.setItem('lastStep', 'step2');
      onNext(inputData);
    } else {
      alert("Please select an industry and a country.");
    }
  };

  // Rest of your Step2 component remains the same
  // Just update the button onClick to use handleNext
};