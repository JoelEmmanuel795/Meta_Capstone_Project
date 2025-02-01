import React from 'react';
import '../CSS/CardTestimonials.css';

const CardTestimonials = ({ image, name, review, rating }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-image" />
      <h5 className="testimonial-name">{name}</h5>
      <p className="testimonial-rating">{rating}</p>
      <p className="testimonial-review">{review}</p>
    </div>
  );
};

export default CardTestimonials;
