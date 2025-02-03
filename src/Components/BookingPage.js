import '../CSS/BookingPage.css'
import '../CSS/Main.css'
import BookingForm from './BookingForm';
import Footer from './Footer';

function BookingPage() {

    return (
        <>
            <header>
                <div className="container-booking">
                    <BookingForm/>
                </div>
            </header>
            <Footer/>
        </>
    );
};

export default BookingPage;

