import React, { Component } from 'react'
import './Navigation.css'

export class navigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }


    
       
    
    render() {
        const sections =['Home','About','Services','Portfolio','Contact'] ;
        const navLinks = sections.map(section => {
            return(
                <li><a href={'#'+section}>{section}</a></li>
            )
        
        });
        return (
            <div>  
                <nav className="nav">
                    <h2 className="logo">React Project</h2>
                    <ul>
                        {navLinks}
                    </ul>
                    
                </nav>
            </div>
        )
    }
}

export default navigation
