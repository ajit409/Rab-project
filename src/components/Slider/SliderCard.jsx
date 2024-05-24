import React from "react";
import "./SliderCard.css";
import { data } from "../../utils/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
        <section id="testimonial">
            <div className="padding-global bg">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="text-align-center">
                            <div>
                                <div className="tagline">
                                    <div className="text-weight-semibold">Testimonials</div>
                                </div>
                                <div className="spacer-xsmall"></div>
                                <h2 className="heading-2">Lorem ipsum dolor sit amet..</h2>
                                <div className="spacer-small"></div>
                            </div>
                            <div className="sub-text-hero">
                                <p className="text-size-medium-section text-color-sec">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="spacer-xxlarge"></div>
                        <div className="testimonial7_component w-slider">
                          <div className="testimonial7_content">
                  
                          <div className="slick_container1">
      <div className="inside_slider">
        <Slider {...settings}>
          {data.map((review, index) => (
            <div key={index} className="slide_item">
              <div className="titleSection">
                <h3 className="title">{review.title}</h3>
                {/* <img className="title" src={review.title} alt="clock" /> */}

              </div>
              <div className="description">
                <p>{review.describtion}</p>
              </div>
              <div className="profile">
                <img className="clock" src={review.image} alt="clock" />
              </div>
              <div className="name">
                <h3>{review.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
                          </div>
          
                  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SliderCard;

