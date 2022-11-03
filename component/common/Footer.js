import Image from 'next/image';
import React from 'react'
import style from "../../styles/components/footer.module.scss";
import FooterImg from '../../images/footer-logo.png'

function Footer() {
    return (
        //     <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //     Start SITE FOOTER
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

        <footer className={`${style.site_footer} ${style.footer_defaultstyle} bg-soft-black`}>
            {/* <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
            <div className={`${style.footer_widget_area} ptb-100`}>
                <div className="container ml-b-60">
                    <div className="row justify-content-between">
                        {/* <!--~~~~~ Start Widget About Footer ~~~~~--> */}
                        <div className="col-lg-6">
                            <aside className={`${style.widget} ${style.bt_about_footer_widget}`}>
                                <div className={`${style.widget_content}`}>
                                    <div className={`${style.about_logo}`}>
                                        <a href="index.html"><Image src={FooterImg} alt="Logo" /></a>
                                    </div>
                                    <div className={`${style.about_info}`}>
                                        <p>The way they make shows is, they make one show. That show's called a pilot.
                                            Then they show that show to the people who make shows more than old one.</p>
                                        <div className={`${style.social_status}`}>
                                            <a target="_blank" href="http://www.facebook.com/royalindiandhababatam"><span className="fab fa-facebook-f"></span></a>
                                            <a target="_blank" href="https://www.instagram.com/royalindiandhababatam"><span className="fab fa-instagram"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        {/* <!--~./ end about footer widget ~--> */}

                        {/* <!--~~~~~ Start Widget Links ~~~~~--> */}
                        <div className="col-lg-2">
                            <aside className={`${style.widget} ${style.widget_links}`}>
                                <div className={`${style.widget_content}`}>
                                    <ul>
                                        <li><a href="ourstory.html">Our story</a></li>
                                        <li><a href="workforus.html">Work for us</a></li>
                                        <li><a href="privacy.html">Privacy policy</a></li>
                                        <li><a href="cookie.html">Cookie policy</a></li>
                                        <li><a href="terms.html">Terms of use</a></li>
                                        <li><a href="security.html">Security policy</a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        {/* <!--~./ end links widget ~--> */}

                        {/* <!--~~~~~ Start Subscribe Widget~~~~~--> */}
                        <div className="col-lg-4">
                            <aside className={`${style.widget} ${style.tb_subscribe_widget}`}>
                                <h2 className={`${style.widget_title}`}><span>Subscribe</span> Today</h2>
                                <div className={`${style.widget_content}`}>
                                    <div className={`${style.subscribe_form}`}>
                                        {/* <!-- Subscribe form --> */}
                                        <form className="dv-form" id="mc-form" action="subscription.php" method="post">
                                            <div className={`${style.form_group}`}>
                                                <input id="mc-email" name="EMAIL" placeholder="Enter Your Email Address"
                                                    type="email" />
                                            </div>
                                            <button className={`${style.subscribe_btn} btn`} name="Subscribe" id="subscribe-btn" type="submit">
                                                <span
                                                    className="fa fa-paper-plane"></span></button>
                                            <p><span>*</span> We Don't Use The Spam</p>
                                        </form>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        {/* <!--~./ end subscribe widget ~--> */}
                    </div>
                </div>
            </div>
            {/* <!--~./ end footer widgets area ~--> */}
        </footer>
    )
    {/* <!--~./ end site footer ~--> */ }

}

export default Footer