import React from 'react'
import '../Component/Gallary.css'

function Gallary  ()  {
  return (
    <>
    <div className='gallary-container'>
        <div className='container-font-details'>
            <h1>Our Work Showcase</h1><br/>
            <p> A Visual Journey of Our Professional Services</p>
        </div>
        
        <img className='gallray-back' src='/gallary1.png'></img>
    </div>
    <div className='gallry-image'>
        <h1>Gallary</h1>
            <div className='gallry-box'>
                <div className='gallary-item'>
                    <img className='img1' src='/AC.jpg'></img>
                </div>
                
                <div className='gallary-item'>
                    <img className='img3' src='/AC.jpg'></img>
                </div>

                <div className='gallary-item'>
                    <img className='img3' src='image.png'></img>    
                </div>

                <div className='gallary-item'>
                    <img className='img3' src='image.png'></img>    
                </div>

                <div className='gallary-item'>
                    <img className='img3' src='image.png'></img>    
                </div>

                <div className='gallary-item'>
                    <img className='img3' src='image.png'></img>    
                </div>

                <div className='gallary-item'>
                    <img className='img3' src='image.png'></img>    
                </div>

                <div className='gallary-item'>
                    <img className='img3' src='image.png'></img>    
                </div>

                <div className='gallary-item'>
                    <img className='img3' src='image.png'></img>    
                </div>
            </div>
        </div>
    </>
  )
}
export default Gallary

