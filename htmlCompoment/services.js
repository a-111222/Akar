import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
class Services extends Component{
    
render(){

    return(
       <section className="main-services">
              <div className="row">
           
              <Carousel className="Carousel" /* activeIndex={false} direction={false} onSelect={false}*/>
        <Carousel.Item className="item">
         
          <Carousel.Caption className="main-caption" >
          <div className="first-service col-sm-12 Caption">
                    <div className="img"></div>
                    <h5>GRAPHIC DESIGN</h5>
                    <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence.</p>
                    <span>Logo Design</span>
                    <span>UI/UX</span>
                    <span>Illustration</span>
              
              
                </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">

      
          <Carousel.Caption className="main-caption" >
        
                <div className="scound-service col-sm-12 Caption">
                <div className="img"></div>
                <h5>DEVELOPMENT</h5>
                <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence.</p>
                <span>Website</span>
               <span>Mobile App</span>
               <span>Desktop App</span>
                </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
         
      
          <Carousel.Caption className="main-caption" >
    <div className="third-service col-sm-12 Caption ">
                <div className="img"></div>
                <h5>BRANDING</h5>
                <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence.</p>
               <span>Logo Design</span>
               <span>UI/UX</span>
               <span>Illustration</span>
                </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      
                <div className="first-service col firs">
                    <div className="img"></div>
                    <h5>GRAPHIC DESIGN</h5>
                    <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence.</p>
                    <span>Logo Design</span>
                    <span>UI/UX</span>
                    <span>Illustration</span>
              
              
                </div>
                <div className="scound-service  col scou">
                <div className="img"></div>
                <h5>DEVELOPMENT</h5>
                <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence.</p>
                <span>Website</span>
               <span>Mobile App</span>
               <span>Desktop App</span>
                </div>
                
                
                
                <div className="third-service col thir">
                <div className="img"></div>
                <h5>BRANDING</h5>
                <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence.</p>
               <span>Logo Design</span>
               <span>UI/UX</span>
               <span>Illustration</span>
                </div>

            </div>
       </section>

 
 
)}
}



export default Services;