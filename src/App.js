import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Head from './Head';

function App() {
  return (
    <>
      <Head></Head>
      <body>
        <Main>
          <Header>
            <Nav></Nav>
          </Header>
          <Footer/>
        </Main>
      </body>
    </>
  );
}

export default App

//<div className="App">
//Homepage
//</div>