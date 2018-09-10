import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    
    render(){
        return(
            <div className="Navbar">
                <div className="Navbar-Content">
                    <div className="Navbar-Content-Right">
                        <h2 href="">Recipe App</h2>
                    </div>
                    <nav className="Navbar-Content-Left">
                        <a>New Recipe</a>
                        <a>Home</a>
                        <a>About</a>
                        <a>Contact Us</a>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;