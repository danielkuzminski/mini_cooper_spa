//styles
import './hero.css'

//react
import { useState } from 'react'

export default function Hero() {

    // creating state to use for class change in hamburger menu
    const [ham, setHam] = useState(false)

    //hamburger menu handler
	const handleBurger = () => {
		setHam(!ham)
	}


  return (
    <header>
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to the World of MINI</h1>
                <p className="hero-description">Experience Driving Joy!</p>
                <button className="hero-cta" type="button">discover more</button>
            </div>
            <div className={ham ? "ham hamburger-area full" : "ham hamburger-area"} onClick={handleBurger}>
                <div className="hamburger-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-list-item">Mini</li>
                    <li className="menu-list-item">Range</li>
                    <li className="menu-list-item">History</li>
                    <li className="menu-list-item">Contact</li>
                </ul>
            </div>
        </section>
    </header>
  )
}


