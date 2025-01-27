import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Head from './Head';

function App() {
  return (
    <>
      <Head/>
      <body>
          <Header>
            <Nav></Nav>
          </Header>
          <Main>Just some body text</Main>
          <Footer/>
      </body>
    </>
  );
}

export default App

//<div className="App">
//Homepage
//</div>