import React, {Component} from 'react';


class Contact extends  Component {
    render(){
        return(
           <div className="contact">
               <div className="row">
                   <div className="contact2">
                       <div className="col"></div>
                       <div className="col"></div>
                       <div className="col"></div>
                       <div className="col"></div>
                       <div className="col"></div>
                       <div className="col"></div>
                   </div>
                        <div className="main-contact">
                        <div className="contact-left col">
                            <h5>Get in touch</h5>
                            <h2>Contact-Us</h2>
                            <div className="spann">
                                <span className="firstspan col-12 col-lg-6">
                                    <a className="animated fadeIn delay-1s" href="https://www.upwork.com/freelancers/~0151e531eb4c0b3995" target="_blank"><i class="fas fa-share-alt-square" ></i>Abdelrhman E.</a>
                                    <a className="animated fadeIn delay-2s" href="https://twitter.com/?lang=ar" target="_blank"><i class="fab fa-twitter-square"></i>Abdelrhman E.</a>
                                    <a className="animated fadeIn delay-3s" href="https://www.facebook.com/profile.php?id=100009162824672" target="_blank"><i class="fab fa-facebook-square"></i>Abdelrhman E.</a>
                                </span>
                                <span className="scoundspan col-12 col-lg-6">
                                    <a className="animated fadeIn delay-4s" href="https://www.instagram.com/abdelrhman_erakii/" target="//_blank"><i class="fab fa-instagram"></i>Abdelrhman E.</a>
                                    <a className="animated fadeIn delay-5s" href="instagram.com/abdelrhman_erakii/" target="_blank"><i class="fas fa-map-marker-alt"></i>Egypt-Damitta</a>
                                </span>
                            </div>
                        </div>
                        <div className="contact-right col">
                        <div className="overlay"></div>
                        </div>
                            
                        </div>

                        
                        <footer>
                            <img></img>
                            <p>made by<i class="fas fa-brain"></i> Abdelrhman_Erakii </p>
                            <ul>
                                <li></li>
                            </ul>
                        </footer>
               </div>
           </div>
        )
    }
}

export default Contact;