import React, {Component} from 'react';
import {Container} from 'react-bootstrap';


class About extends Component{
render(){
    return(
        <Container className="cont col-12 ">
            <div className="row">
                <div className="left  col col-xl fadeIn">
                <div className="overlay"></div>
                </div>
                <div className="right col col-xl fadeIn">
                    <div className="about">
                        <h2>ABOUT US</h2>
                    </div>
                    <p className="first-about">Akar is a digital agency specializing in handcrafted websites that stir emotion.</p>
                    <p className="scound-about">We specialize in the design, development and implementation of tailor-made solutions for corporate and marketing communications across a wide range of business sectors.
                        From individual design elements to websites, apps, </p>
                </div>
            </div>
            </Container>
    )
}
}



export default About;