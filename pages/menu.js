import Image from "next/image";
import React from "react";
import style from "../styles/pages/menu/menu.module.scss";
import Blogimg from "../images/burger1.png";
import Pagination from "../component/common/Pagination";

const menu = () => {

  return (
    <div className="ptb-100">
      <div className="container">
        <div
          className={`${style.filter_foodmenu_tab} filter-foodmenu-main-div`}
        >
          <ul className={`${style.nav_tabs} nav`} id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                className="active"
                href="#"
                id="beef-tab"
                data-toggle="tab"
                data-target="#beef"
                type="button"
                role="tab"
                aria-controls="beef"
                aria-selected="true"
              >
                <span className="icon-beef"></span>Beef
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#"
                id="chicken-tab"
                data-toggle="tab"
                data-target="#chicken"
                type="button"
                role="tab"
                aria-controls="chicken"
                aria-selected="false"
              >
                <span className="icon-chicken"></span> Chicken
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#"
                id="combo-tab"
                data-toggle="tab"
                data-target="#combo"
                type="button"
                role="tab"
                aria-controls="combo"
                aria-selected="false"
              >
                <span className="icon-buger-and-soda"></span> combo
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#"
                id="kids-tab"
                data-toggle="tab"
                data-target="#kids"
                type="button"
                role="tab"
                aria-controls="kids"
                aria-selected="false"
              >
                <span className="icon-breakfast"></span> kids
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#"
                id="drinks-tab"
                data-toggle="tab"
                data-target="#drinks"
                type="button"
                role="tab"
                aria-controls="drinks"
                aria-selected="false"
              >
                <span className="icon-soda"></span>
                Drinks
              </a>
            </li>
            <li>
              <a
                href="#"
                id="sides-tab"
                data-toggle="tab"
                data-target="#sides"
                type="button"
                role="tab"
                aria-controls="sides"
                aria-selected="false"
              >
                <span className="icon-french-fries"></span> Sides
              </a>
            </li>
          </ul>
        </div>{" "}
        {/* filter_foodmenu_tab end */}
      </div>{" "}
      {/* container end */}
      <div className={`${style.food_grid_sec_div} `}>
        <div className="container tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="beef"
            role="tabpanel"
            aria-labelledby="beef-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">1 Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div><div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="chicken"
            role="tabpanel"
            aria-labelledby="chicken-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">22 Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="combo"
            role="tabpanel"
            aria-labelledby="combo-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">33 Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="kids"
            role="tabpanel"
            aria-labelledby="kids-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">44 Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="drinks"
            role="tabpanel"
            aria-labelledby="drinks-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">55 Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="sides"
            role="tabpanel"
            aria-labelledby="sides-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">66 Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={`${style.food_grid_item}`}>
                  <div className={`${style.food_thumb}`}>
                    <Image
                      src={Blogimg}
                      alt="Blog Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className={`${style.food_info}`}>
                    <h3 className={`${style.food_title}`}>
                      <a href="#">Middle Eastern Chicken Burgers</a>
                    </h3>
                    <p>
                      From grilled Tandoori chicken burgers to simple chicken
                      burgers with garlic rosemary mayonnaise, put a new twist
                      on an old barbecue favourite with these unique and chicken
                      burger recipes.
                    </p>
                    <div className={`${style.food_price}`}>
                      11<sub>.99£</sub>
                    </div>
                    <div className={`${style.food_cart_tools}`}>
                      <a
                        href="#"
                        className={`${style.food_cart} btn btn-default`}
                      >
                        Add to cart
                      </a>
                      <a href="#" className={`${style.add_bookmark}`}>
                        <span class="icon-heart"></span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* food_grid_item */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="container">
        <Pagination />
      </div>
    </div>
  );
};

export default menu;
