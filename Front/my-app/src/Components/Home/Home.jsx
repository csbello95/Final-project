import React from 'react'
import circle from "../../assets/circle.png"
import './Home.scss'
const Home = () => {
    return (
        <div className="login-container">
            <section className="login-titles">
                <h1>
                    BUGGY &<br /> BUMPER,INC
                </h1>
                <h2>LA MEJOR RED DE ALQUILER DE AUTOS</h2>
            </section>
            <img src={circle} alt="BuggyBumper" ></img>
        </div>
    )
}

export default Home;
