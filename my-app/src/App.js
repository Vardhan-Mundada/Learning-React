
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Texutils" />

      {/* Text Utilities Start */}
        {/* <div className="container">
        <TextForm heading="Enter Text to analyze" />
        </div> */}
      {/* Text Utilities End */}

      <About/>
    </>
  );
}

export default App;
