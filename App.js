
import './sassComponent/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Link} from "react-router-dom";
import Main from './htmlCompoment/main.js';
import {Menu, MenuItem} from 'react-mdl'; 





function App (){
  return (

    <div id="maindiv">
<div className="row">
<div className="menue col-1">
<i className="fas fa-bars"  name="more_vert" id="demo-menu-lower-left" ></i>
    <Menu target="demo-menu-lower-left" className="main-menue  wow bounceIn">
        <MenuItem >  <Link to="/">         HOME</Link></MenuItem>
        <MenuItem>  <Link to="/services">  Services</Link></MenuItem>
        <MenuItem>  <Link to="/about">     ABOUT</Link></MenuItem>
        <MenuItem>  <Link to="/team">      TEAM</Link></MenuItem>
        <MenuItem>  <Link to="/contact">   Contact</Link></MenuItem>
    </Menu>
</div>
<Main/>
</div>   
</div>
  )
}
export default App;
