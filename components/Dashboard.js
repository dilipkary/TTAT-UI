// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [slotAvailability, setSlotAvailability] = useState({ available: 0, used: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/dashboard', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setVehicleData(response.data.vehicles);
      setSlotAvailability(response.data.slotAvailability);
    };

    fetchData();
  }, []);

  const handleCRUD = (action, vehicleId) => {
    // Implement Create, Read, Update, Delete actions for vehicles
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Slot Availability</h3>
        <p>Available: {slotAvailability.available}</p>
        <p>Used: {slotAvailability.used}</p>
      </div>
      <div>
        <h3>Vehicle Data</h3>
        <ul>
          {vehicleData.map((vehicle) => (
            <li key={vehicle.id}>
              {vehicle.name} - {vehicle.rfid}
              <button onClick={() => handleCRUD('update', vehicle.id)}>Update</button>
              <button onClick={() => handleCRUD('delete', vehicle.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;