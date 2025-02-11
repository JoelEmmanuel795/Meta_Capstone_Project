import React from 'react';
import restaurant from '../Content/restaurant.jpg';
import Mario_and_Adrian from '../Content/Mario_and_Adrian.jpg';
import Footer from "./Footer";
import '../CSS/AboutWrapper.css';
import '../CSS/BookingPage.css';

function AboutWrapper() {

    return (
        <>
            <main>
                <section id="about-wrapper-section">
                    <div className='about-wrapper-grid'>
                        <div className="about-wrapper-text">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                        </div>
                        <div className="about-wrapper-images">
                            <img src={Mario_and_Adrian} className="about-wrapper-image about-wrapper-image1" alt="Mario and Adrian smiling in the kitchen"/>
                            <img src={restaurant} className="about-wrapper-image about-wrapper-image2" alt="The Little Lemon restaurant's interior"/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default AboutWrapper;
