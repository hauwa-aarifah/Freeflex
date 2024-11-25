// src/pages/JobDemand.js
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAuth } from '../context/AuthContext';
import { mockDemandData, mockHotSkills } from '../mockData/jobDemandData';

const JobDemand = () => {
  const { user } = useAuth();
  const [demandData, setDemandData] = useState(null);
  const [hotSkills, setHotSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  useEffect(() => {
    // Simulate API call delay
    setLoading(true);
    setTimeout(() => {
      setDemandData(mockDemandData[selectedIndustry]);
      setHotSkills(mockHotSkills[selectedIndustry]);
      setLoading(false);
    }, 1000);
  }, [selectedIndustry]);

  const getCurrentDemand = () => {
    if (!demandData) return 0;
    return demandData[demandData.length - 1].demand;
  };

  const getCurrentGrowth = () => {
    if (!demandData) return 0;
    return demandData[demandData.length - 1].growth;
  };

  const getYTDGrowth = () => {
    if (!demandData) return 0;
    const start = demandData[0].demand;
    const end = demandData[demandData.length - 1].demand;
    return ((end - start) / start * 100).toFixed(1);
  };

  if (loading) {
    return (
      <div style={{ 
        padding: '2rem',
        color: '#fff',
        backgroundColor: '#111',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        Loading job demand data...
      </div>
    );
  }

  return (
    // ... rest of your existing JSX ...
    <div style={{ 
      padding: '2rem',
      color: '#fff',
      backgroundColor: '#111',
      minHeight: '100vh'
    }}>
      <h1>Job Demand Analysis</h1>
      
      {/* Industry Filter */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ marginRight: '1rem' }}>Select Industry:</label>
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '5px',
            backgroundColor: '#222',
            color: '#fff',
            border: '1px solid #333'
          }}
        >
          {Object.keys(mockDemandData).map((industry) => (
            <option key={industry} value={industry}>
              {industry === 'all' ? 'All Industries' : industry}
            </option>
          ))}
        </select>
      </div>

      {/* Demand Overview */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '10px',
        marginBottom: '2rem'
      }}>
        <h2>Demand Overview</h2>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          <div>
            <h3 style={{ color: '#DEFE7F' }}>{getCurrentDemand()}</h3>
            <p>Current Monthly Jobs</p>
          </div>
          <div>
            <h3 style={{ color: '#DEFE7F' }}>{getCurrentGrowth()}%</h3>
            <p>Month-over-Month Growth</p>
          </div>
          <div>
            <h3 style={{ color: '#DEFE7F' }}>{getYTDGrowth()}%</h3>
            <p>YTD Growth</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '10px',
        marginBottom: '2rem',
        height: '400px'
      }}>
        <h2>Demand Trend</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={demandData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#222',
                border: '1px solid #333',
                borderRadius: '5px'
              }}
            />
            <Legend />
            <Bar dataKey="demand" fill="#DEFE7F" name="Number of Jobs" />
            <Bar dataKey="growth" fill="#82ca9d" name="Growth %" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Hot Skills Section */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '10px'
      }}>
        <h2>Hot Skills in Demand</h2>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem',
          marginTop: '1rem'
        }}>
          {hotSkills.map((skill) => (
            <div
              key={skill}
              style={{
                backgroundColor: '#222',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: '1px solid #333'
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDemand;