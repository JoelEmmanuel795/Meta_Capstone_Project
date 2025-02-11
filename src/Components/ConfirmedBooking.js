import '../CSS/BookingPage.css'
import Footer from './Footer';

function ConfirmedBooking() {

    return (
        <>
            <main>
                <div className="container-booking-content">
                    <h1>Booking confirmed!</h1>
                    <p>📧 We have sent you an email with the confirmation details</p>
                    <p><br/></p>
                    <p className="editors-note">Editor's note: Due to limitations on the templates made available through my free account on Email.js, <br/>
                        I was not able to implement the functionality of sending an email with the booking confirmation details <br/>
                        to your listed email. However, I have implemented the functionality for querying EmailJS's API so that <br/>
                        you can receive a confirmation email at my <strong>Web Developer's Website</strong> link: <br/>
                        <a href="https://joelemmanuel795.github.io/Web-Dev-Profile/" target="_blank">https://joelemmanuel795.github.io/Web-Dev-Profile/</a><br/><br/>
                        Feel free to check out the email functionality via API fetching if you are curious :)
                    </p>
                </div>
            </main>
            <Footer/>
        </>
      );
}

export default ConfirmedBooking;