import React from 'react';
import vg from "../assests/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id="home">Home
    <main>
        <h1>TechySoln.</h1>
        <p>Solution to all your problems</p>
    </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>We are your one and only solution to the tech problems 
               your face 
               every day. We are leading tech company whose  aim is to 
               increase the 
               problem solving ability in children. </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro tenetur recusandae possimus laborum necessitatibus qui debitis tempora est vitae, consectetur pariatur exercitationem et iure quasi consequatur, doloribus maiores repudiandae nemo inventore quis laudantium eveniet? Cum optio dolorem illum nemo voluptates voluptatibus numquam dicta nobis asperiores, blanditiis provident nihil sapiente ipsam, ullam maxime quibusdam sint maiores. Corrupti, architecto assumenda! Distinctio, quam quos? Exercitationem, suscipit quisquam? Ab possimus autem optio laborum facilis, iure id nulla recusandae dolorem!</p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>

            <article>

                <div style={{
                    animationDelay:"0.3s",
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s",
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s",
                }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:"1s",
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    
    </>

  )
}

export default Home