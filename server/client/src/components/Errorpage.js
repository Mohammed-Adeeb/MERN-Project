import React from 'react'
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
  return (
  
    <>
    <div id='notfound'>
<div className='notfound'>

    <div className='notfound-404'>
        <h1>404</h1>
    </div>
    <h2>we are sorry,page notfound!</h2>
    <p className='mb-5'> 
    The page you are looking for might have been removed or had its name changed or its temporary unavailable
    </p>
    <NavLink to='/'>Back to Homepage</NavLink>
</div>

    </div>
    
    </>
  )
}

export default Errorpage;