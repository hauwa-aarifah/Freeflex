// import React, { useState, useEffect } from "react";
// import HeaderV2 from "../HeaderV2";
// import FooterV2 from "../FooterV2";
// import backIcon from "../../img/back-icon.png";
// import backgroundLogo from "../../img/background-logo.png"; // Import the background logo
// import freeflexLogo from "../../img/freeflex-logo.png"; // Import the main logo

// const Step3 = ({ onNext, onBack, selectedIndustry }) => {
//   const [inputData, setInputData] = useState({
//     skills: [], // Updated to store multiple selected skills
//     experienceLevel: "",
//   });
//   const [progress, setProgress] = useState(0); // Initialize progress state
//   const [filteredSkills, setFilteredSkills] = useState([]);

//   // Use an effect to trigger the progress bar animation
//   useEffect(() => {
//     setProgress(50); // Set progress to 50% for Step 3
//   }, []);

//   // Skills data by industry
//   const skillsByIndustry = {
//     "3D": [
//       "3D Modeling",
//       "Animation",
//       "Rendering",
//       "Texturing",
//       "Sculpting",
//       "Rigging",
//       "Lighting",
//       "Shading",
//       "UV Mapping",
//       "Simulation",
//     ],
//     Marketing: [
//       "SEO",
//       "Social Media Marketing",
//       "Content Creation",
//       "Ad Campaign Management",
//       "Copywriting",
//       "Email Marketing",
//       "Influencer Marketing",
//       "Market Research",
//       "Analytics Tools",
//       "Branding",
//     ],
//     Developer: [
//       "JavaScript",
//       "Python",
//       "React.js",
//       "Node.js",
//       "Django",
//       "AWS",
//       "CSS/HTML",
//       "TypeScript",
//       "RESTful API",
//       "Git/GitHub",
//     ],
//     "Data Analyst": [
//       "Python (Data Science)",
//       "SQL",
//       "R Programming",
//       "Data Visualisation",
//       "Machine Learning",
//       "Deep Learning",
//       "Big Data Tools",
//       "Statistical Analysis",
//       "Predictive Modelling",
//       "NLP",
//     ],
//   };

//   // Update filtered skills when industry changes
//   useEffect(() => {
//     if (selectedIndustry && skillsByIndustry[selectedIndustry]) {
//       setFilteredSkills(skillsByIndustry[selectedIndustry]);
//     } else {
//       setFilteredSkills([]);
//     }
//   }, [selectedIndustry]);

//   // Add skill to the selected skills list
//   const handleSkillAdd = (e) => {
//     const selectedSkill = e.target.value;
//     if (selectedSkill && !inputData.skills.includes(selectedSkill)) {
//       setInputData((prev) => ({
//         ...prev,
//         skills: [...prev.skills, selectedSkill],
//       }));
//     }
//   };

//   // Remove skill from the selected skills list
//   const handleSkillRemove = (skillToRemove) => {
//     setInputData((prev) => ({
//       ...prev,
//       skills: prev.skills.filter((skill) => skill !== skillToRemove),
//     }));
//   };

//   // Handle next button click
//   const handleNext = () => {
//     if (inputData.skills.length > 0 && inputData.experienceLevel) {
//       onNext(inputData);
//     } else {
//       alert("Please select at least one skill and an experience level.");
//     }
//   };

//   return (
//     <div
//       className="step3-container"
//       style={{
//         textAlign: "center",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         minHeight: "100vh",
//         backgroundColor: "#111",
//         backgroundImage: `url(${backgroundLogo})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         color: "#fff",
//       }}
//     >
//       {/* Header */}
//       <HeaderV2 />

//       {/* Logo Section */}
//       <div style={{ margin: "2rem 0" }}>
//         <img
//           src={freeflexLogo}
//           alt="Freeflex Logo"
//           style={{
//             width: "300px",
//             height: "auto",
//             display: "block",
//             margin: "0 auto",
//           }}
//         />
//       </div>

//       {/* Main Content */}
//       <div
//         style={{
//           backgroundColor: "rgba(255, 255, 255, 0.1)",
//           padding: "2rem",
//           borderRadius: "10px",
//           width: "60%",
//           margin: "0 auto",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             gap: "2rem",
//           }}
//         >
//           {/* Skills Selection */}
//           <div style={{ flex: 1 }}>
//             <label
//               htmlFor="skills"
//               style={{
//                 display: "block",
//                 marginBottom: "1rem",
//                 fontWeight: "normal",
//               }}
//             >
//               What skills are you looking for?
//             </label>
//             <select
//               id="skills"
//               onChange={handleSkillAdd}
//               style={{
//                 padding: "0.8rem",
//                 borderRadius: "5px",
//                 width: "100%",
//                 backgroundColor: "#222",
//                 color: "#fff",
//                 border: "1px solid #555",
//               }}
//             >
//               <option value="">Select a skill</option>
//               {filteredSkills.map((skill, index) => (
//                 <option key={index} value={skill}>
//                   {skill}
//                 </option>
//               ))}
//             </select>

//             {/* Display Selected Skills */}
//             <div
//               style={{
//                 marginTop: "1rem",
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "0.5rem",
//               }}
//             >
//               {inputData.skills.map((skill, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     padding: "0.3rem 0.8rem",
//                     backgroundColor: "#DEFE7F",
//                     color: "#111",
//                     borderRadius: "15px",
//                     fontSize: "0.9rem",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.5rem",
//                   }}
//                 >
//                   {skill}
//                   <button
//                     onClick={() => handleSkillRemove(skill)}
//                     style={{
//                       background: "none",
//                       border: "none",
//                       color: "#111",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       padding: "0",
//                       fontSize: "1rem",
//                       boxShadow: "none",
//                     }}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Experience Level Selection */}
//           <div style={{ flex: 1 }}>
//             <label
//               htmlFor="experienceLevel"
//               style={{
//                 display: "block",
//                 marginBottom: "1rem",
//                 fontWeight: "normal",
//               }}
//             >
//               What experience level are you looking for?
//             </label>
//             <select
//               id="experienceLevel"
//               value={inputData.experienceLevel}
//               onChange={(e) =>
//                 setInputData({ ...inputData, experienceLevel: e.target.value })
//               }
//               style={{
//                 padding: "0.8rem",
//                 borderRadius: "5px",
//                 width: "100%",
//                 backgroundColor: "#222",
//                 color: "#fff",
//                 border: "1px solid #555",
//               }}
//             >
//               <option value="">Select an experience level</option>
//               <option value="Entry Level">Entry Level</option>
//               <option value="Mid Level">Mid Level</option>
//               <option value="Expert">Expert</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginTop: "2rem",
//           width: "100%",
//           maxWidth: "800px",
//           margin: "2rem auto 0",
//         }}
//       >
//         <button
//           onClick={onBack}
//           style={{
//             background: "none",
//             borderRadius: "100px",
//             border: "none",
//             cursor: "pointer",
//             boxShadow: "none",
//           }}
//         >
//           <img
//             src={backIcon}
//             alt="Back"
//             style={{
//               width: "50px",
//               height: "50px",
//             }}
//           />
//         </button>

//         <button
//           onClick={handleNext}
//           style={{
//             padding: "0 2rem",
//             height: "50px",
//             fontSize: "1rem",
//             borderRadius: "50px",
//             backgroundColor: "#fff",
//             color: "#111",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Continue
//         </button>
//       </div>

//       {/* Progress Bar Centered Above Footer */}
//       <div
//         style={{
//           width: "55%",
//           height: "5px",
//           borderRadius: "6px",
//           backgroundColor: "#333",
//           margin: "0 auto -8px",
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: `${progress}%`,
//             height: "100%",
//             borderRadius: "6px",
//             backgroundColor: "#DEFE7F",
//             transition: "width 0.5s ease-in-out",
//           }}
//         />
//       </div>

//       <FooterV2 />
//     </div>
//   );
// };

// export default Step3;

import React, { useState, useEffect } from "react";
import HeaderV2 from "../HeaderV2";
import FooterV2 from "../FooterV2";
import backIcon from "../../img/back-icon.png";
import backgroundLogo from "../../img/background-logo.png";
import freeflexLogo from "../../img/freeflex-logo.png";

const Step3 = ({ onNext, onBack, selectedIndustry }) => {
  const [inputData, setInputData] = useState({
    skills: [], // Updated to store multiple selected skills
    experienceLevel: "",
  });
  const [progress, setProgress] = useState(0); // Initialize progress state
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Use an effect to trigger the progress bar animation
  useEffect(() => {
    setProgress(50); // Set progress to 50% for Step 3
  }, []);

  // Skills data by industry
  const skillsByIndustry = {
    "3D": [
      "3D Modeling",
      "Animation",
      "Rendering",
      "Texturing",
      "Sculpting",
      "Rigging",
      "Lighting",
      "Shading",
      "UV Mapping",
      "Simulation",
    ],
    Marketing: [
      "SEO",
      "Social Media Marketing",
      "Content Creation",
      "Ad Campaign Management",
      "Copywriting",
      "Email Marketing",
      "Influencer Marketing",
      "Market Research",
      "Analytics Tools",
      "Branding",
    ],
    Developer: [
      "JavaScript",
      "Python",
      "React.js",
      "Node.js",
      "Django",
      "AWS",
      "CSS/HTML",
      "TypeScript",
      "RESTful API",
      "Git/GitHub",
    ],
    "Data Analyst": [
      "Python (Data Science)",
      "SQL",
      "R Programming",
      "Data Visualisation",
      "Machine Learning",
      "Deep Learning",
      "Big Data Tools",
      "Statistical Analysis",
      "Predictive Modelling",
      "NLP",
    ],
  };

  // Update filtered skills when industry changes
  useEffect(() => {
    if (selectedIndustry && skillsByIndustry[selectedIndustry]) {
      setFilteredSkills(skillsByIndustry[selectedIndustry]);
    } else {
      setFilteredSkills([]);
    }
  }, [selectedIndustry]);

  // Add skill to the selected skills list
  const handleSkillAdd = (e) => {
    const selectedSkill = e.target.value;
    if (selectedSkill && !inputData.skills.includes(selectedSkill)) {
      setInputData((prev) => ({
        ...prev,
        skills: [...prev.skills, selectedSkill],
      }));
    }
  };

  // Remove skill from the selected skills list
  const handleSkillRemove = (skillToRemove) => {
    setInputData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  // Handle next button click
  const handleNext = () => {
    if (inputData.skills.length > 0 && inputData.experienceLevel) {
      onNext(inputData); // Pass data back to `GetStarted.js`
    } else {
      alert("Please select at least one skill and an experience level.");
    }
  };

  return (
    <div
      className="step3-container"
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Skills Selection */}
          <div style={{ flex: 1 }}>
            <label
              htmlFor="skills"
              style={{
                display: "block",
                marginBottom: "1rem",
                fontWeight: "normal",
              }}
            >
              What skills are you looking for?
            </label>
            <select
              id="skills"
              onChange={handleSkillAdd}
              style={{
                padding: "0.8rem",
                borderRadius: "5px",
                width: "100%",
                backgroundColor: "#222",
                color: "#fff",
                border: "1px solid #555",
              }}
            >
              <option value="">Select a skill</option>
              {filteredSkills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>

            {/* Display Selected Skills */}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {inputData.skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    padding: "0.3rem 0.8rem",
                    backgroundColor: "#DEFE7F",
                    color: "#111",
                    borderRadius: "15px",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {skill}
                  <button
                    onClick={() => handleSkillRemove(skill)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#111",
                      cursor: "pointer",
                      fontWeight: "bold",
                      padding: "0",
                      fontSize: "1rem",
                      boxShadow: "none",
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Level Selection */}
          <div style={{ flex: 1 }}>
            <label
              htmlFor="experienceLevel"
              style={{
                display: "block",
                marginBottom: "1rem",
                fontWeight: "normal",
              }}
            >
              What experience level are you looking for?
            </label>
            <select
              id="experienceLevel"
              value={inputData.experienceLevel}
              onChange={(e) =>
                setInputData({ ...inputData, experienceLevel: e.target.value })
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
              <option value="">Select an experience level</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Expert">Expert</option>
            </select>
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

export default Step3;
