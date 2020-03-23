import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Home extends Component{
render(){
    return(
      <section>
          <div className="row">
            <div className="we col   col-lg-6"> 
            <h3>We are</h3>
            <h1>Creative Agency</h1>
            <p>Digital agency based in Klaten, Indonesia that loves to craft 
              attractive experiences for the web.</p>
              <Button className="btn" variant="outline-danger">Danger</Button>
              </div>
              <div className="bg col col-lg-5"> 
              <div className="back"></div>
              </div>

          </div>

      </section>
    )
}
}



export default Home;