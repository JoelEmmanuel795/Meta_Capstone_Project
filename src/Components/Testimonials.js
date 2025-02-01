import React from 'react';
import CardTestimonials from './CardTestimonials';
import '../CSS/Testimonials.css';
import Customer1 from '../Content/Customer1.jpg';
import Customer2 from '../Content/Customer2.jpg';
import Customer3 from '../Content/Customer3.jpg';
import Customer4 from '../Content/Customer4.jpg';

const testimonialsData = [
  {
    image: Customer1,
    name: 'Emily Rose',
    review: 'The food was absolutely delicious! I’ll definitely come back.',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    image: Customer2,
    name: 'John Miller',
    review: 'A wonderful dining experience with friendly staff.',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    image: Customer3,
    name: 'Sophia Green',
    review: 'The bruschetta was the best I’ve ever had!',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    image: Customer4,
    name: 'Michael Lee',
    review: 'The desserts were absolutely out of this world!',
    rating: '⭐⭐⭐⭐⭐',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-grid">
        <h3 className="testimonials-title">Testimonials</h3>
        <div className="testimonials-cards">
          {testimonialsData.map((testimonial, index) => (
            <CardTestimonials
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
