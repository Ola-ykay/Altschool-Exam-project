
import './App.css';
import Home from './Components/Home';
import Counter from './Components/Counter';
import Error from './Pages/Error';
import ErrorBoundary from './Pages/ErrorBoundary';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
   <div className='wrapper'>
  <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/counter' element={<Counter />} />
    <Route path='*' element={<Error />} />
    </Routes>
 </BrowserRouter>
     <ErrorBoundary />
   
 </div>
  )
}

export default App