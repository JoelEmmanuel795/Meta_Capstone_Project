import '../CSS/About.css'
import restaurant from '../Content/restaurant.jpg'
import Mario_and_Adrian from '../Content/Mario_and_Adrian.jpg'

function About(props) {
    return (
        <section id="about-section">
            <div className='about-grid'>
                <div className="about-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                </div>
                <div className="about-images">
                    <img src={Mario_and_Adrian} className="about-image about-image1" alt="Mario and Adrian smiling in the kitchen"/>
                    <img src={restaurant} className="about-image about-image2" alt="The Little Lemon restaurant's interior"/>
                </div>
                {props.children}
            </div>
        </section>
    )
}

export default About;