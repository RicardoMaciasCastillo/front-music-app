import React from 'react'
import '../App.css'

export const Reproductor = () => {

    


  return (
    <div className="text-center container">
      <div className='row'>
        <div className='col-lg-12'>

        <img className='img-responsive img-thumbnail imagen text-center' src={require('../assets/portada.jpg')} alt="asd"></img>


        <h1>
        <audio controls>
                        <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
                        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
        </h1>
        <h1 className='text-center'>Song: I'm Lost </h1>


      
        <h1 className='text-center'>Artist: Rick M.C. </h1>


        </div>

      </div>

    </div>




  )
}
