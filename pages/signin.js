import React from 'react'
import style from '../styles/pages/signin/signin.module.scss'

function signin() {
    return (
        <div className={`${style.user_register_block} ptb-100 bg-image bg-overlay bg-parallax2`}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div className={`${style.user_register_area}`}>
                            <div  className={`${style.register_bg_left} bg-image`}></div>
                            <div className={`${style.form_content}`}>
                                <div className={`${style.form_content_signin}`}>
                                    <h3 class="form-heading">Log in your account</h3>
                                    <form class="default-form signin-form">
                                        <div class="form-group">
                                            <input id="email" name="email" class="form-controllar" type="email"
                                                placeholder="E-mail Address" />
                                        </div>
                                        {/* <!--/.form-group--> */}

                                        <div class="form-group">
                                            <input id="pass" name="password" class="form-controllar" type="password"
                                                placeholder="Password" />
                                        </div>
                                        {/* <!--/.form-group--> */}

                                        <div className={`${style.form_btn_group}`}>
                                            <button type="submit" className={`${style.btn_default} btn btn-default`}>
                                                sign in
                                            </button>
                                            <div className={`${style.forget_pass}`}>
                                                Forget password? Please <a class="btn-password" href="#">click here</a>
                                            </div>
                                        </div>
                                        <div className={`${style.reg_others_midea}`}>
                                            <div className={`${style.text}`}>
                                                Or Login With
                                            </div>
                                            <div class="midea-icons">
                                                <ul className={`${style.social_share}`}>
                                                    <li><a  href="#" className={`${style.google_plus}`}><i
                                                        class="fab fa-google"></i></a></li>
                                                    <li><a  href="#" className={`${style.linkedin}`}><i
                                                        class="fab fa-linkedin"></i>apple</a></li>
                                                         <li><a  href="#" className={`${style.facebook}`}><i
                                                        class="fab fa-facebook"></i>apple</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!--~./ end user register area ~--> */}
                    </div>
                    {/* <!-- /.col-lg-8 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </div>
    )
    {/* < !--~~./ end user register block ~~--> */ }

}

export default signin