import React from 'react'
import style from "../../styles/components/header.module.scss";
import logo from '../../images/logo.png'
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
        // < !--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //     Start Site Header
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
        <div className='position-relative'>
            <header className={`${style.site_header}   ${style.header_absolute} ${style.default_header_style} intro-element`}>
                <div className={`${style.header_top_area}`}>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-4">
                                <div className={`${style.intro_socail_share}`}>
                                    <div className={`${style.share_alt}`}><span class="fa fa-share-alt"></span></div>
                                    <div className={`${style.socail_share}`}>
                                        <a target="_blank" href="http://www.facebook.com/royalindiandhababatam"><span class="fab fa-facebook-f"></span></a>
                                        <a target="_blank" href="https://www.instagram.com/royalindiandhababatam"><span class="fab fa-instagram"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div className={`${style.site_branding}`}>
                                    <a href="index02.html">
                                        <Image src={logo} alt="Site Logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div className={`${style.header_right_area}`}>
                                    <div className={`${style.intro_content_info}`}><span>For customised order:</span> +62 001-23456789</div>

                                    <div className={`${style.header_card_area}`}>
                                        <a href="#">
                                            <span class="icon-paper-bag"></span>
                                            <sup>2</sup>
                                        </a>

                                    </div>
                                    {/* <!--~./ header card area ~--> */}

                                    <div class="hamburger-menus">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                {/* <!-- /.header-top-right-area --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /.header-top-area --> */}

                <div className={`${style.navigation_area}`}>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div className={`${style.site_navigation}`}>
                                    <nav className={`${style.navigation}`}>
                                        <div className={`${style.menu_wrapper}`}>
                                            <div className={`${style.menu_content}`}>
                                                <ul className={`${style.mainmenu}`}>
                                                    <li>
                                                        <Link href="/">
                                                            Home
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/menu">
                                                            Menu
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/signin">
                                                            Sign in
                                                        </Link>
                                                    </li>
                                                    <li><a href="reservation.html">Reservation</a></li>
                                                    <li><a href="services.html">Services</a></li>
                                                    <li><a href="contact.html">Contact us</a></li>


                                                </ul>
                                                {/* <!-- /.menu-list --> */}
                                            </div>
                                            {/* <!-- /.hours-content--> */}
                                        </div>
                                        {/* <!-- /.menu-wrapper --> */}
                                    </nav>
                                </div>
                                {/* <!-- /.site-navigation --> */}
                            </div>
                            {/* <!-- /.col-12 --> */}
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.navigation-area --> */}

                <div class="mobile-sidebar-menu sidebar-menu">
                    <div class="overlaybg"></div>
                </div>
            </header>

            {/* // <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // Start Page Title Area
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> */}
            <div class="page-title-area bg-image bg-parallax2">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div className={`${style.page_header_content} text-center`}>
                                <div class="page-header-caption">
                                    <h2 class="page-title">The Menu</h2>
                                </div>
                                <div class="breadcrumb-area">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active">Menu</li>
                                    </ol>
                                </div>
                                {/* <!--~~./ breadcrumb-area ~~--> */}
                            </div>
                            {/* <!--~~./ page-header-content ~~--> */}
                        </div>
                    </div>
                </div>
                {/* <!--~~./ end container ~~--> */}
            </div>
        </div>
        // <!--~~./ end page title area ~~-->
    )
    // < !--~~./ end site header ~~-->

}

export default Navbar