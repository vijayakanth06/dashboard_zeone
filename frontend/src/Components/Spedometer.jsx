import React from "react";

const Speedometer = ({ value }) => {
  // Define the maximum value for the speedometer
  const maxValue = 80;

  // Calculate the strokeDasharray for the arc
  const strokeDasharray = `${(value / maxValue) * 100} ${
    100 - (value / maxValue) * 100
  }`;

  // Increase size
  const radius = 80; // Increased radius for a larger speedometer
  const strokeWidth = 12; // Increase stroke width for better visibility
  const svgWidth = 250; // Increased SVG width
  const svgHeight = 150; // Increased SVG height

  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        padding: "20px", // Add padding
        borderRadius: "10px", // Add border radius
        backgroundColor: "#ffffff", // Optional: background color
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional: add shadow for depth
      }}
    >
      <svg width={svgWidth} height={svgHeight}>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#00BFFF", stopOpacity: 1 }}
            />{" "}
            {/* Deep Sky Blue */}
            <stop
              offset="100%"
              style={{ stopColor: "#1E90FF", stopOpacity: 1 }}
            />{" "}
            {/* Dodger Blue */}
          </linearGradient>
        </defs>
        <circle
          cx={svgWidth / 2}
          cy={svgHeight - 20} // Adjusted to keep the circle in view
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={svgWidth / 2}
          cy={svgHeight - 20}
          r={radius}
          fill="none"
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={100}
          transform={`rotate(-90 ${svgWidth / 2} ${svgHeight - 20})`}
        />
        <text
          x="50%"
          y={svgHeight - 20}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="25"
          fill="#000"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};

export default Speedometer;
