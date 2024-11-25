import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const backendResponse = location.state?.backendResponse || null; // Access the backend response
  const formData = location.state?.formData || null; // Access the collected form data

  return (
    <div style={{ textAlign: "center", color: "#fff", backgroundColor: "#111", minHeight: "100vh" }}>
      <h1>Dashboard</h1>

      <h2>Collected Form Data</h2>
      {formData ? (
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      ) : (
        <p>No form data found.</p>
      )}

      <h2>Backend Response</h2>
      {backendResponse ? (
        <pre>{JSON.stringify(backendResponse, null, 2)}</pre>
      ) : (
        <p>Loading response from the backend...</p>
      )}
    </div>
  );
};

export default Dashboard;
