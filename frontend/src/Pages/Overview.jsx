import React from 'react';
import { useLocation } from 'react-router-dom';
import profile from '../assets/profile.png';
import Speedometer from '../Components/Spedometer';
import DetailsCard from '../Components/DetailsCard/DetailsCard';

const Overview = () => {
  const location = useLocation();
  const studentData = location.state?.hoveredData || {
    name: "Select a Student",
    mail: "--",
    exp: "--",
    company: "--",
    score: "--",
  };

  return (
    <>
      <section>
        <h1>Overview</h1>

        <div className="Overview-container">
          <div>
            <div className="Overview-Profile">
              <img src={profile} className="overview-profile-img" alt="" />
              <div>
                <h1 className="profile-title">{studentData.name}</h1>
                <p style={{ marginLeft: "20px" }}>Email: {studentData.mail}</p>
                <p style={{ marginLeft: "20px" }}>Experience: {studentData.exp}</p>
                <p style={{ marginLeft: "20px" }}>Company: {studentData.company}</p>
              </div>
            </div>

            <div style={{marginTop:"15px", display:"flex", justifyContent:"space-evenly"}}>
              <DetailsCard value={5} title={"Active Test"} />
              <DetailsCard value={studentData.score} title={"Total Score"} />
            </div>
          </div>

          <div className="overview-statistics">
            <h1>Statistical Report</h1>
            <Speedometer value={studentData.score} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
