import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '../components/styles.css';


function Navbar() {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check"></input>
                <label for="check" className="checkbtn">
                    <FontAwesomeIcon icon={faBars}/>
                </label>
                <label className="Navbar__logo">Randomizer</label>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Github</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
