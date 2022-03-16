import React from "react";
// import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import Navbar from "../layout/Navbar";
import Logo from '../assets/logo.png';
import Footer from "../layout/Footer";
function Event() {
    return (
        <div>
              
    <div className="page-wrapper">
<Navbar />


<div class="stricky-header stricked-menu">
    <div class="container">
        <div class="logo-box">
            <Link to="{{route('home')}}"><img src="assets/images/logo-light.png" width="101" alt=""/></Link>
        </div>
        <div class="sticky-header__content"></div>
    </div>
</div>
<section class="page-header">
    <div class="page-header__bg" ></div>
  
    <div class="container">
        <h2>Events Page</h2>
        <ul class="thm-breadcrumb list-unstyled dynamic-radius">
            <li><Link to="{{route('home')}}">Home</Link></li>
            <li>-</li>
            <li><span>Events</span></li>
        </ul>
    </div>
</section>

     <section class="news-page pb-120 pt-120">
            <div class="container">
                <div class="news-3-col">
                    <div class="blog-card">
                        <div class="blog-card__inner">
                             <Link to="/event_detail">
                            <div class="blog-card__image">
                                <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                <div class="blog-card__date">20 May</div>
                            </div>
                        </Link>
                            <div class="blog-card__content">
                              
                                <h3 class="mt-2"><Link to="/event_detail">Fundrising for Early Childhood Rise</Link></h3>
                              
                                <div class="pl-3 pr-3 cause-card__goals_event">
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i><strong>Time:</strong> 9:00am 02:00pm</p>
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i> <strong>Location:</strong> Pakistan</p>
                                </div>

                                <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                               
                                <div class="cause-card__bottom_event">
                                    <Link to="/event_detail" class="thm-btn dynamic-radius">Read More</Link>
                                    <Link to="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></Link>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="blog-card__inner">
                            <Link to="/event_detail">
                            <div class="blog-card__image">
                                <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                <div class="blog-card__date">20 May</div>
                            </div>
                        </Link>
                            <div class="blog-card__content">
                              
                                <h3 class="mt-2"><Link to="/event_detail">Fundrising for Early Childhood Rise</Link></h3>
                              
                                <div class="pl-3 pr-3 cause-card__goals_event">
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i><strong>Time:</strong> 9:00am 02:00pm</p>
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i> <strong>Location:</strong> Pakistan</p>
                                </div>

                                <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                               
                                <div class="cause-card__bottom_event">
                                    <Link to="/event_detail" class="thm-btn dynamic-radius">Read More</Link>
                                    
                                    <Link to="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></Link>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="blog-card__inner">
                            <Link to="/event_detail">
                            <div class="blog-card__image">
                                <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                <div class="blog-card__date">20 May</div>
                            </div>
                        </Link>
                            <div class="blog-card__content">
                              
                                <h3 class="mt-2"><Link to="/event_detail">Fundrising for Early Childhood Rise</Link></h3>
                              
                                <div class="pl-3 pr-3 cause-card__goals_event">
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i><strong>Time:</strong> 9:00am 02:00pm</p>
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i> <strong>Location:</strong> Pakistan</p>
                                </div>

                                <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                               
                                <div class="cause-card__bottom_event">
                                    <Link to="/event_detail" class="thm-btn dynamic-radius">Read More</Link>
                                  
                                    <Link to="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></Link>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="blog-card__inner">
                             <Link to="/event_detail">
                            <div class="blog-card__image">
                                <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                <div class="blog-card__date">20 May</div>
                            </div>
                        </Link>
                            <div class="blog-card__content">
                              
                                <h3 class="mt-2"><Link to="/event_detail">Fundrising for Early Childhood Rise</Link></h3>
                              
                                <div class="pl-3 pr-3 cause-card__goals_event">
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i><strong>Time:</strong> 9:00am 02:00pm</p>
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i> <strong>Location:</strong> Pakistan</p>
                                </div>

                                <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                               
                                <div class="cause-card__bottom_event">
                                    <Link to="/event_detail" class="thm-btn dynamic-radius">Read More</Link>
                                  
                                    <Link to="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></Link>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="blog-card__inner">
                             <Link to="/event_detail">
                            <div class="blog-card__image">
                                <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                <div class="blog-card__date">20 May</div>
                            </div>
                        </Link>
                            <div class="blog-card__content">
                              
                                <h3 class="mt-2"><Link to="/event_detail">Fundrising for Early Childhood Rise</Link></h3>
                              
                                <div class="pl-3 pr-3 cause-card__goals_event">
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i><strong>Time:</strong> 9:00am 02:00pm</p>
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i> <strong>Location:</strong> Pakistan</p>
                                </div>

                                <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                               
                                <div class="cause-card__bottom_event">
                                    <Link to="/event_detail" class="thm-btn dynamic-radius">Read More</Link>
                                  
                                    <Link to="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></Link>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="blog-card__inner">
                            <Link to="/event_detail">
                            <div class="blog-card__image">
                                <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                <div class="blog-card__date">20 May</div>
                            </div>
                        </Link>
                            <div class="blog-card__content">
                              
                                <h3 class="mt-2"><Link to="/event_detail">Fundrising for Early Childhood Rise</Link></h3>
                              
                                <div class="pl-3 pr-3 cause-card__goals_event">
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i><strong>Time:</strong> 9:00am 02:00pm</p>
                                    <p> <i style={{color:"#fcad30" }} class="p-2 azino-icon-clock"></i> <strong>Location:</strong> Pakistan</p>
                                </div>

                                <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                               
                                <div class="cause-card__bottom_event">
                                    <Link to="/event_detail" class="thm-btn dynamic-radius">Read More</Link>
                                  
                                    <Link to="#" class="cause-card__share" aria-label="share postr"><i class="azino-icon-share"></i></Link>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div> 
                <ul class="list-unstyled post-pagination d-flex justify-content-center align-items-center">
                    <li><Link to="#"><i class="far fa-angle-left"></i></Link></li>
                    <li><Link to="#">01</Link></li>
                    <li><Link to="#">02</Link></li>
                    <li><Link to="#">03</Link></li>
                    <li><Link to="#"><i class="far fa-angle-right"></i></Link></li>
                </ul> 
            </div> 
        </section> 

<Footer />
</div>

</div>

    );
}
export default Event;

