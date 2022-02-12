import React from 'react';


function Home(){
    return(
    <div className='home'>
        <h1>WeMob</h1>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className='offer'>
          <div id='one'>
           <h1>Software Development</h1>
           <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </p>
          </div>
          <div id='two'>
              <h1>Mobile Development</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div id='three'>
              <h1>Web Development</h1>
              <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
          </div>
        </div>
        <footer className='footer'>
            This website is created by DORIAN DODA
            @ 04/01/2022

        </footer>
    </div>

    )
}

export default Home;