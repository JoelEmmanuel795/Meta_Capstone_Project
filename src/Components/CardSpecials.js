import React from 'react';
import '../CSS/CardSpecials.css'; // Ensure styles are responsive
import { Link } from 'react-router-dom';

const CardSpecials = ({ image, title, description, price }) => {
  return (
    <div className="card-specials">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
          <span className="card-price">${price}</span>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">
            <Link
              to="/order-online/under-construction"
            >
              <button className="order-button">
                Order a delivery <span className="order-icon">🚚</span>
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSpecials;
