import Header from "./components/Header"
import Hero from "./components/Hero"
import PhoneShowcase from "./components/PhoneShowcase";

import './App.css'

function App() {
  return(
      <div className="landing">
          <Header/>
          <main className="hero">
            <Hero/>
            <PhoneShowcase/>
          </main>
      </div>
    );
}

export default App
