import '../../style.css'
import AboutUs from '../AboutUs';
import Contacts from '../Contacts';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Services from '../Services';
import { useState } from 'react'

function App() {

  const [ menuActive, setMenuActive ] = useState(false);

  return (
    <div>
     <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
     <Services />
     <AboutUs />
     <Contacts />
     <Footer />
    </div>
  );
}

export default App;
