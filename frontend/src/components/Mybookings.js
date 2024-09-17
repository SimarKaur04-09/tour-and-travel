import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import './myBookings.css';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching bookings...');
    const fetchBookings = async () => {
      if (!user) {
        navigate('/login');
        return;
      }
      try {
        const res = await fetch(`http://localhost:1000/api/v1/booking/${user._id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const result = await res.json();
        console.log('Fetch result:', result);
        if (result.data === null) {
          setError('No bookings found');
        } else {
          setBookings(result.data);
        }
      } catch (err) {
        console.error('Error fetching bookings:', err.message);
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user, navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>
      <Table>
        <thead>
          <tr>
            <th>Tour</th>
            <th>Date</th>
            <th>Guests</th>
            <th>Ratings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.tourName}</td>
              <td>{booking.bookAt}</td>
              <td>{booking.guestSize}</td>
              <td>{booking.avgRating === 0 ? "No rating" : `${booking.avgRating} (${booking.reviews.length})`}</td>
              <td>
                <Button color="danger">Cancel</Button>
                <Button color="primary">Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBookings;
