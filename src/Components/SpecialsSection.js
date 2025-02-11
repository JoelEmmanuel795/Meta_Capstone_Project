import greek_salad from '../Content/greek_salad.jpg'
import bruchetta from '../Content/bruchetta.jpg'
import lemon_dessert from '../Content/lemon_dessert.jpg'

import React from 'react';
import CardSpecials from './CardSpecials';
import '../CSS/SpecialsSection.css';

const SpecialsSection = () => {
  const specials = [
    {
      image: greek_salad,
      title: 'Greek Salad',
      description: 'The famous Greek salad of crispy lettuce, peppers, olives, and feta cheese garnished with garlic and rosemary croutons.',
      price: '12.99',
    },
    {
      image: bruchetta,
      title: 'Bruschetta',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '5.99',
    },
    {
    image: lemon_dessert,
      title: 'Lemon Dessert',
      description: 'This comes straight from grandma’s recipe book, every ingredient is as authentic as can be.',
      price: '5.00',
    },
  ];

  return (
    <section className="specials-section">
      <div className="specials-grid">
        <div className="specials-flex">
          <h2>This week's specials!</h2>
          <button className="view-menu-button">
            <a href="https://www.littlelemon.ie/wp-content/uploads/a-la-carte-Little-Lemon.pdf" target="_blank">
              Online Menu
            </a>
          </button>
        </div>
        <div id="specials-cards" class="specials-cards">
          {specials.map((special, index) => (
            <CardSpecials
              key={index}
              image={special.image}
              title={special.title}
              description={special.description}
              price={special.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
