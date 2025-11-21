import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer style={{ backgroundColor: 'gray', padding: '20px', textAlign: 'center' }}>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' style={{height:"50px"}} >Contact us</button>
        </div>
        <p style={{color:"black"}}>
"Books are the mirrors of the soul; in solitude, they reflect deepest truths.” — Virginia Woolf</p>
            <p  style={{ color: 'black', marginBottom: '0' }}>Call At: 91 87654 32145</p>
      <p style={{ color: 'black', marginBottom: '0' }}>
      Copyright  &copy; {new Date().getFullYear()} By Book World. <br/>All Rights Reserved.
      </p>
    </footer>
    </div>
  )
}

export default Footer