import React, { Component } from 'react'
import './Services.css'


export class Services extends Component {
    render() {

        

      /*  const easy = iconObj.map(icone =>{
            return (
                <div>
                            <span>
                            
                            </span>
                            <h4> {icone.title} </h4>
                            <p> {icone.description} </p>
                    </div>
            );
        }) */

        return (
            <div className="services">
                <h3> What we offer </h3> 
                <h2> Services </h2> 
                <div className="row">
                  <Icon myIcon={iconObj[0].icon} myTitle = {iconObj[0].title} myDescription = {iconObj[0].description} />
                  <Icon myIcon={iconObj[1].icon} myTitle = {iconObj[1].title} myDescription = {iconObj[1].description} /> 
                  <Icon myIcon={iconObj[2].icon} myTitle = {iconObj[2].title} myDescription = {iconObj[2].description} />
                  <Icon myIcon={iconObj[3].icon} myTitle = {iconObj[3].title} myDescription = {iconObj[3].description} />
                </div>
                
            </div>
        )
    } 
}


const iconObj  = [
    {
      icon: <ion-icon name="phone-portrait-outline"></ion-icon>,
      title:'Responsive',
      description:' hello word' ,
    },
    {
      icon: <ion-icon name="pencil-outline"></ion-icon>,
      title:'Redisigne',
      description:'epress yourself by designing ' 
    },
    {
      icon: <ion-icon name="browsers-outline"></ion-icon>,
      title:'Favorites',
      description:'our best services ' 
    },
    
    {
      icon: <ion-icon name="git-pull-request-outline"></ion-icon>,
      title:'Questions',
      description:'ask your questions here' 
    
    }
  ];

class Icon extends Component {
    render(){
        return (
            <div>
                <span>
                 {this.props.myIcon}
                </span>
                <h4> 
                 {this.props.myTitle}
                 </h4>
                <p> 
                    {this.props.myDescription}
                </p>
            </div>
        );
    }
}  



export default Services
