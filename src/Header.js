    import React, { Component } from 'react'
    import Background from './images/photo.jpg'
    import './header.css'
    console.log(Background);

    const myStyles = {
    
       backgroundImage: `url( ${Background} )`,
       
        height:'80vh',
        backgroundSize:'cover'
    }
    export class Header extends Component {

       
        render() {
            return (
                <div>
                    <header style={myStyles}> 
                        <h1>welcome to the city of  gods </h1>
                    </header>
                </div>
            )
        }
    }
    
    export default Header
    