"use client";

import Banner from "@/src/components/Banner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Client from "@/src/components/slider/Client";

const page = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner pageTitle={t("Menu.about")} />
      {/* About Area start */}
      <section className="about-area-two py-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div
                className="about-page-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row">
                  <div className="section-title mb-25">
                    <h2>{t("Footer.name")}</h2>
                  </div>
                  <div className="">
                    <p>{t("About.text1")}</p>
                    <p>{t("About.text2")}</p>
                    <ul className="list-style-two mt-35">
                      <li>{t("Submenu.visa")}</li>
                      <li>{t("Submenu.ticket")}</li>
                      <li>{t("Submenu.trip")}</li>
                      <li>{t("Submenu.moving")}</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="theme-btn style-three mt-30"
                    >
                      <span data-hover={t("About.contact")}>
                        {t("About.contact")}
                      </span>
                      <i className="fal fa-arrow-right pl-10" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="image mb-30">
                    <img
                      className="br-10 w-100"
                      src="/assets/images/about/about-feature1.jpg"
                      alt="About"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="image mb-30">
                    <img
                      className="br-10 w-100"
                      src="/assets/images/about/about-feature2.jpg"
                      alt="About"
                    />
                  </div>
                  <div className="image mb-30">
                    <img
                      className="br-10 w-100"
                      src="/assets/images/about/about-feature3.jpg"
                      alt="About"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}

      {/* About Us Area start */}
      {/* <section className="about-us-area pt-70 pb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div
                className="about-us-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <h2>
                    Travel with Confidence Top Reasons to Choose Our Agency
                  </h2>
                </div>
                <p>
                  Taewoong Travel is not just about tours; it's a path to
                  vibrant and unforgettable moments in your journey.
                </p>
                <div className="row pt-25">
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span className="count-text plus">
                        <Counter end={50} />
                      </span>
                      <span className="counter-title">Popular tours</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span className="count-text plus">
                        <Counter end={999} />
                      </span>
                      <span className="counter-title">Satisfied Clients</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="theme-btn mt-10 style-two">
                  <span data-hover="Explore Destinations">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-us-page">
                <img src="/assets/images/about/about-page.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* About Us Area end */}
      {/* Team Area start */}
      <section className="about-team-area pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>{t("About.title2")}</h2>
                <p>{t("About.text3")}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <Link href="/visa">
                <div
                  className="team-item hover-content"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="/assets/images/team/3.svg" alt="Guide" />

                  <div className="content">
                    <h6>{t("Expert.expert1")}</h6>
                    <span
                      className="designation"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {t("Submenu.visa")}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <Link href="/ticket">
                <div
                  className="team-item hover-content"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="/assets/images/team/1.svg" alt="Guide" />
                  <div className="content">
                    <h6>{t("Expert.expert2")}</h6>
                    <span
                      className="designation"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {t("Submenu.ticket")}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <Link href="/trip">
                <div
                  className="team-item hover-content"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="/assets/images/team/2.svg" alt="Guide" />
                  <div className="content">
                    <h6>{t("Expert.expert3")}</h6>
                    <span
                      className="designation"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {t("Submenu.trip")}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <Link href="/moving">
                <div
                  className="team-item hover-content"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="/assets/images/team/4.svg" alt="Guide" />
                  <div className="content">
                    <h6>{t("Expert.expert4")}</h6>
                    <span
                      className="designation"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {t("Submenu.moving")}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Goals Area start */}
      <section className="about-feature-two bgc-black pt-100 pb-45 rel z-1">
        <div className="container">
          <div
            className="section-title text-center text-white counter-text-wrap mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <h2>{t("About.title3")}</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-booking" />
                </div>
                <div className="content">
                  <h5>{t("About.goals1")}</h5>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {t("About.goals1text")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-best-price" />
                </div>
                <div className="content">
                  <h5>{t("About.goals2")}</h5>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {t("About.goals2text")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-guidepost" />
                </div>
                <div className="content">
                  <h5>{t("About.goals3")}</h5>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {t("About.goals3text")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-tourism" />
                </div>
                <div className="content">
                  <h5>{t("About.goals4")}</h5>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {t("About.goals4text")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-business-travel" />
                </div>
                <div className="content">
                  <h5>{t("About.goals5")}</h5>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {t("About.goals5text")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-tent" />
                </div>
                <div className="content">
                  <h5>{t("About.goals6")}</h5>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {t("About.goals6text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape">
          <img src="/assets/images/video/shape1.png" alt="shape" />
        </div>
      </section>
      {/* Goals Area end */}
      {/* Video Area start */}
      {/* <div className="video-area pt-25 pb-100 rel z-1">
        <div className="container">
          <div
            className="video-wrap"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="/assets/images/video/video-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
              tabIndex={-1}
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="for-bg bgc-black">
          <div className="shape">
            <img src="/assets/images/video/shape2.png" alt="shape" />
          </div>
        </div>
      </div> */}
      {/* Video Area end */}

      {/* Client Logo Area start */}
      <div className="client-logo-area mb-100 pt-100">
        <div className="container">
          <div className="client-logo-wrap pt-30 pb-10">
            <div
              className="text-center mb-20"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6>{t("Client.title1")}</h6>
            </div>
            <Client />
          </div>
        </div>
      </div>
      {/* Client Logo Area end */}
    </Layout>
  );
};
export default page;
