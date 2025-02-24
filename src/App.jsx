/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

const App=() =>{
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [qrData, setQrData] = useState(""); // State to store QR code data

  // State to store user data
  const [userData, setUserData] = useState({
    name: "",
    idCard: "",
    email: "",
    phone: "",
    carNumber: "",
    lisence: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new user data to the existing data
    const updatedUsers = [...allUsers, userData];
    setAllUsers(updatedUsers); // Update state
    localStorage.setItem("UserData", JSON.stringify(updatedUsers)); // Save to localStorage

    // Generate QR code for the current user
    const dataString = JSON.stringify(userData);
    setQrData(dataString); // Set QR code data
    setIsSubmitted(true); // Set form as submitted
  };

  return (
    <div className="Main-container">
      {/* FORM CONTAINER */}
      <div className="form-container">
        <h2>User Information Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>ID Card:</label>
            <input
              type="number"
              name="idCard"
              value={userData.idCard}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="number"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              maxLength={10}
              required
            />
          </div>
          <div>
            <label>Car Number</label>
            <input
              type="text"
              name="carNumber"
              value={userData.carNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Lisence Number</label>
            <input
              type="number"
              name="lisence"
              value={userData.lisence}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* QR SECTION */}
      {isSubmitted && (
        <div className="QR-container">
          <div className="qr-code">
            <QRCode value={qrData}
             style={{ height: "auto", maxWidth: "10rem", width: "10rem" }}
            /> {/* Display the QR code */}
          </div>

          <div className="text-container">
            <div className="scan">SCAN ME</div>
            <div className="detail">For Driver</div>
            <div className="info">Information</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;