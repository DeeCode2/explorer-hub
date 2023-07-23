import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import NewLocation from './components/NewLocation';

function App() {

  //const [show, setShow] = useState(false);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/newlocation' element={<NewLocation />} />
      </Routes>
      
    </>
  )
}

export default App
