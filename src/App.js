import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Packages from './Components/Packages/Packages';
import Gallery from './Components/Gallery/Gallery';
import Testimonial from './Components/Testimonial/Testimonial';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Components/blogs/Blogs';
import Appointment from './Components/Appointment/Appointment';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Products />
      <Packages />
      <Gallery />
      <Testimonial />
      <Blogs />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;