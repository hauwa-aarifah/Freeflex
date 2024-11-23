import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import HeaderV2 from "../HeaderV2";

const Step1 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/get-started/step2"); // Navigate to Step 2
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
        <h2>Hi there!</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
          We’re excited to get you started. To ensure we provide the best
          experience, <strong>we’ll ask a few questions</strong> about the{" "}
          <strong>type of work</strong> you’re looking to accomplish. This helps
          us tailor our recommendations and find the right freelancers for your
          project needs. Let’s get started!
        </p>
        <button
          onClick={handleContinue}
          style={{
            marginTop: "2rem",
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            borderRadius: "25px",
            backgroundColor: "#fff",
            color: "#111",
            border: "none",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Step1;
