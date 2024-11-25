import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../HeaderV2";
import FooterV2 from "../FooterV2";
import backIcon from "../../img/back-icon.png";
import backgroundLogo from "../../img/background-logo.png";
import freeflexLogo from "../../img/freeflex-logo.png";

const Step5 = ({ onNext, onBack }) => {
  const [inputData, setInputData] = useState({
    locationPreference: "",
    workingHours: "",
  });
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setProgress(100); // Progress is 100% for Step 5
  }, []);

  const handleFinish = () => {
    if (inputData.locationPreference && inputData.workingHours) {
      onNext(inputData); // Pass the final input data to the parent component
    } else {
      alert("Please select your location and working hours preferences.");
    }
  };

  const locationOptions = [
    "Remote (Any Location)",
    "Local (Same Country)",
    "Within the Same Time Zone",
    "Within the Same Continent",
    "On-Site (Specific City or Region)",
    "English-Speaking Country",
    "Freelancers in Developing Countries (Cost-Effective Options)",
    "Freelancers in Developed Countries",
    "No Preference",
  ];

  const workingHoursOptions = [
    "Standard Working Hours (9 AM - 5 PM)",
    "Flexible Working Hours",
    "Asynchronous (Work at Their Own Pace)",
    "Night Shifts (e.g., 10 PM - 6 AM)",
    "Overlap with Your Time Zone",
    "Available on Weekends",
    "Available for Urgent/Overnight Tasks",
    "No Specific Preference",
  ];

  return (
    <div
      className="step5-container"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundColor: "#111",
        backgroundImage: `url(${backgroundLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "#fff",
      }}
    >
      {/* Header */}
      <HeaderV2 />

      {/* Logo Section */}
      <div style={{ margin: "2rem 0" }}>
        <img
          src={freeflexLogo}
          alt="Freeflex Logo"
          style={{
            width: "300px",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          borderRadius: "10px",
          width: "60%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Location Preferences */}
        <div style={{ flex: 1 }}>
          <label
            htmlFor="locationPreference"
            style={{
              display: "block",
              marginBottom: "1rem",
              fontWeight: "normal",
            }}
          >
            Any location preferences for the freelancer?
          </label>
          <select
            id="locationPreference"
            value={inputData.locationPreference}
            onChange={(e) =>
              setInputData({ ...inputData, locationPreference: e.target.value })
            }
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              width: "100%",
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #555",
            }}
          >
            <option value="">Select a location preference</option>
            {locationOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Working Hours Preferences */}
        <div style={{ flex: 1 }}>
          <label
            htmlFor="workingHours"
            style={{
              display: "block",
              marginBottom: "1rem",
              fontWeight: "normal",
            }}
          >
            What working hours do you prefer?
          </label>
          <select
            id="workingHours"
            value={inputData.workingHours}
            onChange={(e) =>
              setInputData({ ...inputData, workingHours: e.target.value })
            }
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              width: "100%",
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #555",
            }}
          >
            <option value="">Select working hours preference</option>
            {workingHoursOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          width: "100%",
          maxWidth: "800px",
          margin: "2rem auto 0",
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            boxShadow: "none",
          }}
        >
          <img
            src={backIcon}
            alt="Back"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </button>

        <button
          onClick={handleFinish}
          style={{
            padding: "0 2rem",
            height: "50px",
            fontSize: "1rem",
            borderRadius: "50px",
            backgroundColor: "#DEFE7F",
            color: "#111",
            border: "none",
            cursor: "pointer",
          }}
        >
          Finish
        </button>
      </div>

      {/* Progress Bar Centered Above Footer */}
      <div
        style={{
          width: "55%",
          height: "5px",
          borderRadius: "6px",
          backgroundColor: "#333",
          margin: "0 auto -8px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            borderRadius: "6px",
            backgroundColor: "#DEFE7F",
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>

      <FooterV2 />
    </div>
  );
};

export default Step5;
