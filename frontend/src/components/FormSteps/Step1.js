import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'; // Add this import
import Footer from "../Footer";
import HeaderV2 from "../HeaderV2";

const Step1 = ({ onNext, formData }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // Get auth state

  // Check for existing session
  useEffect(() => {
    const lastStep = localStorage.getItem('lastStep');
    if (lastStep && lastStep !== 'step1') {
      const shouldResume = window.confirm(
        'You have a saved session. Would you like to continue where you left off?'
      );
      if (shouldResume) {
        navigate(`/get-started/${lastStep}`);
      } else {
        localStorage.removeItem('lastStep');
        localStorage.removeItem('formData');
      }
    }
  }, [navigate]);

  const handleContinue = () => {
    // Save current step to localStorage
    localStorage.setItem('lastStep', 'step1');
    
    if (onNext) {
      onNext();
    } else {
      navigate("/get-started/step2");
    }
  };

  return (
    <div
      className="step1-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      {/* Header */}
      <HeaderV2 />

      {/* Main Content */}
      <main
        style={{
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h2>
          {isLoggedIn ? "Welcome Back!" : "Hi there!"}
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
          {isLoggedIn ? (
            <>
              Welcome back to FreeFlex! Let's continue helping you find the perfect freelancer 
              for your project. We'll guide you through a few questions to understand your needs better.
            </>
          ) : (
            <>
              We're excited to get you started. To ensure we provide the best
              experience, <strong>we'll ask a few questions</strong> about the{" "}
              <strong>type of work</strong> you're looking to accomplish. This helps
              us tailor our recommendations and find the right freelancers for your
              project needs. Let's get started!
            </>
          )}
        </p>

        {/* Progress Indicator */}
        <div style={{ margin: "2rem 0" }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "0.5rem",
            marginBottom: "1rem" 
          }}>
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: step === 1 ? "#DEFE7F" : "#333",
                }}
              />
            ))}
          </div>
          <p style={{ color: "#666" }}>Step 1 of 5</p>
        </div>

        <button
          onClick={handleContinue}
          style={{
            marginTop: "2rem",
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            borderRadius: "25px",
            backgroundColor: "#DEFE7F",
            color: "#111",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          {formData ? "Continue Where You Left Off" : "Let's Get Started"}
        </button>

        {formData && (
          <button
            onClick={() => {
              localStorage.removeItem('lastStep');
              localStorage.removeItem('formData');
              navigate("/get-started/step2");
            }}
            style={{
              marginTop: "1rem",
              padding: "0.8rem 2rem",
              fontSize: "1rem",
              borderRadius: "25px",
              backgroundColor: "transparent",
              color: "#DEFE7F",
              border: "1px solid #DEFE7F",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#DEFE7F";
              e.target.style.color = "#111";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#DEFE7F";
            }}
          >
            Start Fresh
          </button>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Step1;