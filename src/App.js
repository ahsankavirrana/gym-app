import './App.css';
import Footer from './componants/Footer/Footer';
import Hero from './componants/Hero/Hero';
import Join from './componants/Join/Join';
import Plans from './componants/Plans/Plans';
import Programs from './componants/Programs/Programs';
import Reasons from './componants/Reasons/Reasons';
import Testimonials from './componants/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;

