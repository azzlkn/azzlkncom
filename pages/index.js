import React from 'react'

function Index() {
  return (
    <>
      <header>
        <div className="container">
          <div className="heading-wrapper">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="info">
                  <i className="icon ion-ios-location-outline"></i>
                  <div className="right-area">
                    <h5>Tevfik Sağlampaşa Sok. Nu. 3/36</h5>
                    <h5>Eski Kuyumcular,Karesi,Balıkesir</h5>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="info">
                  <i className="icon ion-ios-telephone-outline"></i>
                  <div className="right-area">
                    <h5>850-885-0379 (1001)</h5>
                    <h6>MON - FRI,9AM - 6PM</h6>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="info">
                  <i className="icon ion-ios-chatboxes-outline"></i>
                  <div className="right-area">
                    <h5>azizalkan@dadayazilim.com</h5>
                    <h6>REPLY IN 24 HOURS</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="intro-section">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-lg-2"></div>
            <div className="col-md-10 col-lg-8">
              <div className="intro">
                <div className="profile-img">
                  <img src="/images/azzlkn.jpg" alt="" width="100%" />
                </div>
                <h2>
                  <b>Aziz ALKAN</b>
                </h2>
                <h4>FULL STACK DEVELOPER</h4>
                <ul className="information">
                  <li>
                    <b>BORN : </b>May 05, 1997
                  </li>
                  <li>
                    <b>Full Stack Developer: </b>
                    <a href="https://www.dadayazilim.com" target="_blank">
                      @Dada Yazılım
                    </a>
                  </li>
                </ul>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/azzlkn"
                      target="_blank"
                    >
                      <i className="ion-social-linkedin"></i>
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.github.com/azzlkn" target="_blank">
                      <i className="ion-social-github"></i>
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/azzlkn" target="_blank">
                      <i className="ion-social-twitter"></i>
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.medium.com/@azzlkn" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="15px"
                        height="15px"
                        style={{ marginBottom: 2 }}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M28 28v456h456V28H28zm378.83 108.04l-24.46 23.45a7.162 7.162 0 0 0-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55l60.35-150.55h84.66v5.16z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.goodreads.com/quotes/list/150765304"
                      target="_blank"
                    >
                      <i className="ion-ios-book"></i>
                      <span>Quotes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
