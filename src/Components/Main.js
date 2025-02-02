import '../CSS/Main.css'
import restaurant from '../Content/restaurant.jpg'
import Mario_and_Adrian from '../Content/Mario_and_Adrian.jpg'

function Main(props) {
    return (
        <main id="about-section">
            <div className='main'>
                <div className="main-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                </div>
                <div className="main-images">
                    <img src={Mario_and_Adrian} className="main-image main-image1" alt="Mario and Adrian smiling in the kitchen"/>
                    <img src={restaurant} className="main-image main-image2" alt="The Little Lemon restaurant's interior"/>
                </div>
                {props.children}
            </div>
        </main>
    )
}

export default Main