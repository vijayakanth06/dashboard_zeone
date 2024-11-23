import React from "react";
import "./StudentsCard.css";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { LinearProgress, Box, Typography, Button } from "@mui/material";

const StudentsCard = ({ hoveredData }) => {
  const { name = "Select a Student", mail = "--", exp = "--", company = "--", score = 85, duration = 60, maxDuration = 120 } = hoveredData || {};

  const navigate = useNavigate();

  const handleOverviewClick = () => {
    navigate("/overview", { state: { hoveredData } }); // Pass hoveredData to Overview
  };

  return (
    <section className="StudentsCard-Container">
      <div className="StudentCard-content">
        <img src={profile} className="profile" alt="Profile" />
        <h1>{name}</h1>

        {/* Separate background for Email, Experience, and Company */}
        <p className="email">Email: {mail}</p>
        <p className="experience">Experience: {exp}</p>
        <p className="company">Company: {company}</p>

        {/* Score Progress Bar */}
        <Box sx={{ width: "100%", marginTop: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
            Score: {score}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={score}
            sx={{
              height: 8,
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#4caf50",
                borderRadius: 5,
              },
              "&.MuiLinearProgress-colorPrimary": {
                backgroundColor: "#e0e0e0",
              },
            }}
          />
        </Box>

        {/* Duration Progress Bar */}
        <Box sx={{ width: "100%", marginTop: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
            Duration: {duration} minutes
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(duration / maxDuration) * 100}
            sx={{
              height: 8,
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#2196f3",
                borderRadius: 5,
              },
              "&.MuiLinearProgress-colorPrimary": {
                backgroundColor: "#e0e0e0",
              },
            }}
          />
        </Box>

        {/* Centered, Smaller Overview Button */}
        <Box sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOverviewClick}
            sx={{
              width: "100px",
              borderRadius: 20,
              padding: "8px 15px",
              fontSize: "0.9rem",
            }}
          >
            Overview
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default StudentsCard;
