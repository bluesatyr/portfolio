import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Project';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section class="content about-me" id="about-me">
              <div class="content-heading">
                  <h2>About Me</h2>
              </div>
              <div class="about-text">
                  
                  <p>I am a web developer who believes in bringing the best possible experience to the end user. A  modern polymath, I have worn many different hats in life: musician, dementia specialist, world traveller, event planner. Above all I am a life-long learner.  I bring  a unique perspective to development, informed by my travels and many experiences in various fields.</p>
                  
                  <p>As a citizen of the world, I see technology as an avenue to bring people together and to bridge distances caused by geography, nationality and language.  The web should ultimately be intuitive, accessible and enjoyable. As a developer I see that as my primary responsibility.</p>
              </div>
          </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
