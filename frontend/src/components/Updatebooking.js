// src/components/UpdateBooking.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Button } from "reactstrap";

const UpdateBooking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await fetch(`http://localhost:1000/api/v1/booking/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setBooking(data);
        } else {
          alert(data.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    fetchBooking();
  }, [id]);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:1000/api/v1/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Booking updated successfully!");
        navigate("/my-bookings");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  if (!booking) return <div>Loading...</div>;

  return (
    <div className="update-booking">
      <h2>Update Booking</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            value={booking.fullName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <input
            type="number"
            placeholder="Phone"
            id="phone"
            value={booking.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <input
            type="date"
            id="bookAt"
            value={new Date(booking.bookAt).toISOString().split("T")[0]}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <input
            type="number"
            placeholder="Guests"
            id="guestSize"
            value={booking.guestSize}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Update Booking
        </Button>
      </Form>
    </div>
  );
};

export default UpdateBooking;
