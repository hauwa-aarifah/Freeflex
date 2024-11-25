import React, { useState, useEffect } from "react";
import HeaderV2 from "../HeaderV2";
import FooterV2 from "../FooterV2";
import backIcon from "../../img/back-icon.png";
import backgroundLogo from "../../img/background-logo.png";
import freeflexLogo from "../../img/freeflex-logo.png";

const Step4 = ({ onNext, onBack }) => {
  const [inputData, setInputData] = useState({
    hours: "",
    notSure: false, // Tracks if the user is unsure
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(75); // Set progress to 75% for Step 4
  }, []);

  const handleNext = () => {
    if (inputData.notSure || inputData.hours) {
      onNext(inputData); // Pass inputData (hours or "not sure") back to `GetStarted`
    } else {
      alert("Please specify the expected number of hours or select 'Not sure.'");
    }
  };

  const handleNotSureChange = () => {
    setInputData((prev) => ({
      ...prev,
      notSure: !prev.notSure,
      hours: prev.notSure ? prev.hours : "", // Reset hours if "not sure" is selected
    }));
  };

  return (
    <div
      className="step4-container"
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
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "1.5rem",
            fontWeight: "normal",
            fontSize: "1.2rem",
          }}
        >
          How many hours do you expect this project to take?
        </label>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Hours Input */}
          <div style={{ flex: 1 }}>
            <label
              htmlFor="hours"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "normal",
                textAlign: "left",
              }}
            >
              Enter Hours
            </label>
            <input
              id="hours"
              type="number"
              min="0"
              value={inputData.hours}
              onChange={(e) =>
                setInputData({ ...inputData, hours: e.target.value })
              }
              placeholder="Enter hours"
              style={{
                padding: "0.8rem",
                borderRadius: "5px",
                width: "100%",
                backgroundColor: "#222",
                color: "#fff",
                border: "1px solid #555",
                height: "50px", // Matches the height of the button
              }}
              disabled={inputData.notSure}
            />
          </div>

          {/* Not Sure Button */}
          <div style={{ flex: 1 }}>
            <label
              htmlFor="notSure"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "normal",
                textAlign: "left",
              }}
            >
              Not Sure?
            </label>
            <button
              onClick={handleNotSureChange}
              style={{
                width: "100%",
                height: "50px", // Matches the height of the input field
                fontSize: "1rem",
                borderRadius: "5px",
                backgroundColor: inputData.notSure ? "#DEFE7F" : "#222",
                color: inputData.notSure ? "#111" : "#fff",
                border: "1px solid #555",
                cursor: "pointer",
                boxShadow: "none",
              }}
            >
              {inputData.notSure ? "Not Sure (Selected)" : "Not Sure"}
            </button>
          </div>
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
          onClick={handleNext}
          style={{
            padding: "0 2rem",
            height: "50px",
            fontSize: "1rem",
            borderRadius: "50px",
            backgroundColor: "#fff",
            color: "#111",
            border: "none",
            cursor: "pointer",
          }}
        >
          Continue
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

export default Step4;
