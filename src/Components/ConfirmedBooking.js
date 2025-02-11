import '../CSS/BookingPage.css'
import Footer from './Footer';

function ConfirmedBooking() {

    return (
        <>
            <main>
                <div className="container-booking-content">
                    <div className='container-booking-form'>
                        <h1 className="bookingConfirmed">Booking confirmed!</h1>
                        <div>
                            <p>📧 We have sent you an email with the confirmation details</p>
                            <p className="editors-note">
                                <br/><br/><strong>Editor's note: </strong> Due to limitations on the templates made available through my free account on Email.js, I was not able to implement the functionality of sending you an email with the booking confirmation details to your listed email.
                            </p>
                            <p className="editors-note">
                                <br/>However, I have implemented the functionality for querying EmailJS's API so that you can receive a confirmation email at my <strong>Web Developer's Website:  </strong>
                                <a href="https://joelemmanuel795.github.io/Web-Dev-Profile/" target="_blank">Click here to check it out</a>
                            </p>
                            <p className="editors-note">
                                <br/>Feel free to check out the email functionality via API fetching there if you are curious :)
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
      );
}

export default ConfirmedBooking;