import React from 'react';

function About(){
    return(
 <div className='about'>
    <h1 id='atitle'>WeMob</h1>
    <p id='apara'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with
    the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bfVcp4mdKTU" title="YouTube video player" frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen>
         
     </iframe>
    <p id='apara'>
    It is a long established fact that a reader will be distracted by the readable
    content of a page when looking at its layout. The point of using Lorem Ipsum is 
    that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
    content here', making it look like readable English. Many desktop publishing packages
    and web page editors now use Lorem Ipsum as their default model text, and a search for 
    lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
    over the years,
    sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
    <footer className='footer'>
            This website is created by DORIAN DODA
            @ 04/01/2022

        </footer>
</div>
    )
}

export default About;