import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, featured } = tour;

  const [likeCount, setLikeCount] = useState(0);

  const incrementLikeCount = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card_top d-flex align-items-center justify-content-between">
            <span className="tour_location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
          </div>
          <h5 className="tour_title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person</span>
            </h5>
            <button className="btn like_btn" onClick={incrementLikeCount}>
              <FontAwesomeIcon icon={faHeart} color="red" />
              <span>{likeCount}</span>
            </button>
            <button className="btn booking_btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
