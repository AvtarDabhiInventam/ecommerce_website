import Image from "next/image";
import React from "react";
import FeaturedImg1 from "../images/featured1.png";
import FeaturedImg2 from "../images/featured2.png";
import FeaturedImg3 from "../images/featured3.png";
import ChooseThumb from "../images/choose-thumb.png";
import style from "../styles/pages/services/services.module.scss";

const services = () => {
  return (
    <div>
      {/* featured section */}
      <div className={`${style.featured_blocks} featured-block ptb-100`}>
        <div class="container ml-b-30">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div className={`${style.featured_item}`}>
                <figure className={`${style.featured_thumb}`}>
                  <Image
                    src={FeaturedImg1}
                    alt="Feature Image"
                    className="img-fluid"
                  />
                </figure>
                <div className={`${style.featured_info}`}>
                  <div className={`${style.featured_info_inner}`}>
                    <div className={`${style.icon}`}>
                      <span className="icon-birthday-cake"></span>
                    </div>
                    <h3 className={`${style.featured_title}`}>
                      Birthday Party
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div className={`${style.featured_item}`}>
                <figure className={`${style.featured_thumb}`}>
                  <Image
                    src={FeaturedImg2}
                    alt="Feature Image"
                    className="img-fluid"
                  />
                </figure>
                <div className={`${style.featured_info}`}>
                  <div className={`${style.featured_info_inner}`}>
                    <div className={`${style.icon}`}>
                      <span className="icon-cake-slice"></span>
                    </div>
                    <h3 className={`${style.featured_title}`}>
                      Wedding Ceremony
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div className={`${style.featured_item}`}>
                <figure className={`${style.featured_thumb}`}>
                  <Image
                    src={FeaturedImg3}
                    alt="Feature Image"
                    className="img-fluid"
                  />
                </figure>
                <div className={`${style.featured_info}`}>
                  <div className={`${style.featured_info_inner}`}>
                    <div className={`${style.icon}`}>
                      <span className="icon-baking"></span>
                    </div>
                    <h3 className={`${style.featured_title}`}>Catering</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Whatever we do */}
      <div className={`${style.services_block} ptb-100 bg-overlay`}>
        <div class="container ml-b-40">
          <div class="row">
            <div class="col-12">
              <div
                className={`${style.section_title} section-default text-center text-white`}
              >
                <h2 className={`${style.title_main}`}>
                  Whatever We Do <span>We do with great dedication</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Us Block */}
      <div class="choose-us-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <div className={`${style.choose_thumb}`}>
                <Image
                  src={ChooseThumb}
                  alt="ChooseThumb Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-8">
              <div class="choose-us-content ptb-90">
                <div class="row ml-b-50">
                  <div class="col-lg-6 col-md-6">
                    <div className={`${style.single_choose_item}`}>
                      <div className={`${style.icon}`}>
                        <span class="icon-food3"></span>
                      </div>
                      <div className={`${style.info}`}>
                        <h3 className={`${style.heading24}`}>Delivery Available</h3>
                        <p>
                          The way they make shows is, they make one show. That
                          show's called a pilot. Then they show that show to the
                          people who make shows.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div className={`${style.single_choose_item}`}>
                      <div className={`${style.icon}`}>
                        <span class="icon-food3"></span>
                      </div>
                      <div className={`${style.info}`}>
                        <h3 className={`${style.heading24}`}>Delivery Available</h3>
                        <p>
                          The way they make shows is, they make one show. That
                          show's called a pilot. Then they show that show to the
                          people who make shows.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div className={`${style.single_choose_item}`}>
                      <div className={`${style.icon}`}>
                        <span class="icon-food3"></span>
                      </div>
                      <div className={`${style.info}`}>
                        <h3 className={`${style.heading24}`}>Delivery Available</h3>
                        <p>
                          The way they make shows is, they make one show. That
                          show's called a pilot. Then they show that show to the
                          people who make shows.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div className={`${style.single_choose_item}`}>
                      <div className={`${style.icon}`}>
                        <span class="icon-food3"></span>
                      </div>
                      <div className={`${style.info}`}>
                        <h3 className={`${style.heading24}`}>Delivery Available</h3>
                        <p>
                          The way they make shows is, they make one show. That
                          show's called a pilot. Then they show that show to the
                          people who make shows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
