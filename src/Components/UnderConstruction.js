import under_construction from '../Content/under-construction.png';
import Footer from './Footer';
import '../CSS/AboutWrapper.css';

function UnderConstruction() {

    return (
        <>
            <main>
                <section id="about-wrapper-section">
                    <div className='about-wrapper-grid'>
                        <div className="about-wrapper-text">
                        <img src={under_construction} className="under-construction-image" width={"330px"} alt="Under Construction image"/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default UnderConstruction;
