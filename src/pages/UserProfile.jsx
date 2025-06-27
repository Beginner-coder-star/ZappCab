import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState({});
  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios.get(`/api/profile/${userId}`)
      .then(res => {
        setUser(res.data.user);
        setRides(res.data.rides);
      })
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Welcome, {user.name}</h1>
      <div className="mb-6">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>

      <h2 className="text-lg font-semibold mb-2">Ride History</h2>
      <ul className="space-y-4">
        {rides.map(ride => (
          <li key={ride._id} className="p-4 bg-gray-100 rounded-lg shadow">
            <p><strong>Date:</strong> {new Date(ride.date).toLocaleString()}</p>
            <p><strong>From:</strong> {ride.pickupLocation}</p>
            <p><strong>To:</strong> {ride.dropLocation}</p>
            <p><strong>Fare:</strong> ₹{ride.fare}</p>
            <p><strong>Status:</strong> {ride.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
