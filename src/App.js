import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Main>
        <Header>
          <Nav></Nav>
        </Header>
        <Footer/>
      </Main>
    </>
  );
}

export default App

//<div className="App">
//Homepage
//</div>