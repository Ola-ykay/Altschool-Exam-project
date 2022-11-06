import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className='section-home'>
      <Helmet>
      <title>Home-Page</title>
        <meta name='description' content='Counter App with useReducer'/>
        <link rel='canonical' href='/home' />
      </Helmet>
    <h3>Counter App</h3>
      <p>Welcome here!</p>
      <div className='start-btn'><Link to='/counter'>Start Counter</Link></div>
      <div className='home-design'>
       <div className='design-1'>
      <button className='btn-1'><i class="fa-solid fa-arrow-up"></i>Increment</button>
         
    <button className='btn-11'><i class="fa-solid fa-arrow-down"></i>Decrement</button>
        
        </div>
        <div className='design-2'>
        <button className='btn-3'><i class="fa-solid fa-arrows-rotate"></i>Reset</button>
         
          <button className='btn-31'><i class="fa-brands fa-nfc-directional"></i>SetValue</button>
          
    
          
          </div>
      </div> 
    </div>
  )
}

export default Home