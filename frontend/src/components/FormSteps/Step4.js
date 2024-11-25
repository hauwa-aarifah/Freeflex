// src/components/FormSteps/Step4.js
const Step4 = ({ onNext, onBack, initialData = {} }) => {
  const [inputData, setInputData] = useState(initialData || {
    hours: "",
    notSure: false
  });

  useEffect(() => {
    // Load saved data if available
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData.step4Data) {
        setInputData(parsedData.step4Data);
      }
    }
  }, []);

  const handleNext = () => {
    if (inputData.notSure || inputData.hours) {
      // Save current step data
      const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
      localStorage.setItem('formData', JSON.stringify({
        ...savedData,
        step4Data: inputData
      }));
      localStorage.setItem('lastStep', 'step4');
      onNext(inputData);
    } else {
      alert("Please specify the expected number of hours or select 'Not sure.'");
    }
  };

  // Rest of your Step4 component remains the same
  // Just update the button onClick to use handleNext
};