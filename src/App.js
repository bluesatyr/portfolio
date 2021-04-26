import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
//import logo from './logo.svg';
import './App.css';



function App() {

  const [currentPage, setCurrentPage] = useState("about");
  let currentComponent;
  switch (currentPage) {
    case "portfolio":
      currentComponent = <Portfolio />;
      break;
    case "contact":
      currentComponent = <ContactForm />;
      break;
    case "resume":
        currentComponent = <Resume />;
        break;
    default:
      currentComponent = <About />;

  };

  return (
    <div className="App">
      <Header
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Header>
      <main>
        {currentComponent}
      </main>
      <Footer />
    </div>
  );
}

export default App;
