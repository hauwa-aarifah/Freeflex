// src/components/FormSteps/Step1.js
import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderV2 from "../HeaderV2";
import FooterV2 from "../FooterV2";
import backgroundLogo from "../../img/background-logo.png";
import freeflexLogo from "../../img/freeflex-logo.png";

const Step1 = ({ onNext }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
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
        backgroundImage: `url(${backgroundLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "#fff",
      }}
    >
      <HeaderV2 />

      <main
        style={{
          textAlign: "center",
          padding: "2rem",
        }}
      >
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

        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          borderRadius: "10px",
          maxWidth: "800px",
          margin: "0 auto",
        }}>
          <h2>Hi there!</h2>
          <p style={{ lineHeight: "1.6" }}>
            We're excited to get you started. To ensure we provide the best
            experience, <strong>we'll ask a few questions</strong> about the{" "}
            <strong>type of work</strong> you're looking to accomplish. This helps
            us tailor our recommendations and find the right freelancers for your
            project needs.
          </p>

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
            Let's Get Started
          </button>
        </div>
      </main>

      <FooterV2 />
    </div>
  );
};

export default Step1;