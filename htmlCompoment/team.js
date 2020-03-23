import React ,{ Component} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'


class Team extends Component{
    render(){
        return(

            <div className="main">
    <Container className="teamContainer">
    <Carousel className="Carousel "   /*direction={false} onSelect={false} activeIndex={false}*/ >
    
      <Carousel.Item className="CarouselItem ">
    <Carousel.Caption className="CarouselCaption hide" >
     <div className="content">
        <div className="firstImg"> 
          <h2>Ivan Seventeen </h2>
          <h4>Graphic Designer</h4>
        </div>
     </div>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item className="CarouselItem ">
    <Carousel.Caption className="CarouselCaption hide">
    <div className="content">
      <div className="ScoundImg"> 
          <h2>Nicky Astria </h2>
            <h4>Web Developer</h4>
      </div>
    
     </div>
    </Carousel.Caption>
  </Carousel.Item>

  
  <Carousel.Item className="CarouselItem ">
    <Carousel.Caption className="CarouselCaption hide">
    <div className="content">
      <div className="ForthImg"> 
          <h2>Nicky Astria </h2>
            <h4>Web Developer</h4>
      </div>
    
     </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   


<div className="mainTwo">


<div className="two parent">
<div className="over-lay"></div>
<div className="twop plus"> 
          <h2>John Wick </h2>
          <h4>Web Developer</h4>
 </div>
</div>
<div className="three parent"> 
<div className="over-lay"></div>
<div className="threep plus"> 
          <h2>Nicky Astria </h2>
          <h4>Web Developer</h4>
 </div>
</div>
<div className="four parent">
<div className="over-lay"></div>
<div className="fourp plus"> 
          <h2>Will Smith </h2>
          <h4>Web Tester</h4>
 </div>
</div>
</div>



        </Container>
            </div>
        )
    }
}

export default Team;