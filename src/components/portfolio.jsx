import React from "react";

//import stock
import Airbnb_1 from "../img/Airbnb_1.PNG";
import Airbnb_2 from "../img/Airbnb_2.PNG";
import Airbnb_3 from "../img/Airbnb_3.PNG";
import Netflix_Clone_1 from "../img/Netflix_Clone_1.PNG";
import Netflix_Clone_2 from "../img/Netflix_Clone_2.PNG";
import Netflix_Clone_3 from "../img/Netflix_Clone_3.PNG";
import Weather_1 from "../img/Weather_1.PNG";
import Weather_2 from "../img/Weather_2.PNG";
import Weather_3 from "../img/Weather_3.PNG";
import Weather_4 from "../img/Weather_4.PNG";
import Weather_5 from "../img/Weather_5.PNG";
import Recipe_App_1 from "../img/Recipe_App_1.PNG";
import Recipe_App_2 from "../img/Recipe_App_2.PNG";
import Recipe_App_3 from "../img/Recipe_App_3.PNG";
import React_Smooth_Scroll_1 from "../img/React_Smooth_Scroll_1.PNG";
import React_Smooth_Scroll_2 from "../img/React_Smooth_Scroll_2.PNG";
import React_Smooth_Scroll_3 from "../img/React_Smooth_Scroll_3.PNG";
import React_Smooth_Scroll_4 from "../img/React_Smooth_Scroll_4.PNG";
import React_Smooth_Scroll_5 from "../img/React_Smooth_Scroll_5.PNG";
import React_Smooth_Scroll_6 from "../img/React_Smooth_Scroll_6.PNG";
import React_Resp_1 from "../img/React_Resp_1.PNG";
import React_Resp_2 from "../img/React_Resp_2.PNG";
import React_Resp_3 from "../img/React_Resp_3.PNG";
import React_Resp_4 from "../img/React_Resp_4.PNG";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  Below are few of the projects that I have worked on.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={Airbnb_1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={Airbnb_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Airbnb Clone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 ReactJS Material-UI
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={Airbnb_2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Airbnb_3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="work-box">
                <a href={Netflix_Clone_1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={Netflix_Clone_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">NetFlix Clone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 React API-Data fetch
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={Netflix_Clone_2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Netflix_Clone_3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="work-box">
                <a href={React_Resp_1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={React_Resp_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">React Responsive Website</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 ReactJS
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={React_Resp_2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={React_Resp_3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={React_Smooth_Scroll_1} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={React_Smooth_Scroll_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">React Smooth Scroll</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS React-Scroll React-Router
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={React_Smooth_Scroll_2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={React_Smooth_Scroll_3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

                <a
                  href={React_Smooth_Scroll_4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

                <a
                  href={React_Smooth_Scroll_5}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

                <a
                  href={React_Smooth_Scroll_6}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={Recipe_App_1} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={Recipe_App_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Recipe App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML5 CSS3 React API-Data fetch</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={Recipe_App_2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Recipe_App_3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={Weather_1} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={Weather_1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Weather App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 React API-Data fetch
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={Weather_2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Weather_3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Weather_4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Weather_5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
