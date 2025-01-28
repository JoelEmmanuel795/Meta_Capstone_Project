import './CSS/App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Head from './Components/Head';

function App() {
  return (
    <>
      <Head/>
      <div className="App">
        <Nav/>
        <Header><h1>Just some body text</h1></Header>
        <Main><h2>Heyooo</h2><p>Yoohooo</p></Main>
        <Footer/>
      </div>
    </>
  );
}

export default App

//<div className="App">
//Homepage
//</div>