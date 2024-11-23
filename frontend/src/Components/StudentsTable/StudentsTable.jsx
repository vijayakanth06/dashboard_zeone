import React, { useState } from "react";
import TableCard from "./TableCard"; // Ensure TableCard is properly imported
import "./StudentsTable.css";

const StudentsTable = ({ setHoveredData }) => {
  const [selectedData, setSelectedData] = useState(null); // Track selected row data
  const [hoveredData, setHoveredDataState] = useState(null); // Track currently hovered row

  const Datas = [
    { name: "Naveen Sakthi", mail: "naveen@gmail.com", exp: "5 years", company: "Zeone" },
    { name: "Jeyachandran J", mail: "jeyan@gmail.com", exp: "5 years", company: "Zeone" },
    { name: "John Smith", mail: "john@gmail.com", exp: "3 years", company: "Zoho" },
  ];

  const handleRowClick = (item) => {
    setSelectedData(item); // Set the clicked row as selected
    setHoveredData && setHoveredData(item); // Update the parent component if needed
  };

  const handleMouseEnter = (item) => {
    setHoveredDataState(item); // Temporarily track the hovered row
  };

  const handleMouseLeave = () => {
    setHoveredDataState(null); // Clear the hovered row when the mouse leaves
  };

  return (
    <div className="tableWithCard">
      <section className="Table-Container">
        {/* Table Header */}
        <div className="tableHead">
          <li>Name</li>
          <li style={{ marginLeft: "15vh" }}>Mail Id</li>
          <li style={{ marginLeft: "13vh" }}>Experience</li>
          <li>Company Name</li>
        </div>

        {/* Table Rows */}
        <div className="tableContent">
          {Datas.map((item, index) => (
            <div
              key={index}
              className={`TableCard-Container ${
                selectedData === item
                  ? "hovered" // Apply "hovered" if row is clicked
                  : hoveredData === item
                  ? "hovering" // Temporary style for hovered row
                  : ""
              }`}
              onClick={() => handleRowClick(item)}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <TableCard value={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentsTable;
