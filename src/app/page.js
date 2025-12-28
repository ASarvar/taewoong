"use client";

import Client from "../components/slider/Client";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Slider from "react-slick";
import { sliderProps } from "@/utility/sliderprops";
import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  return (
    <Layout header={1} footer={1}>
      {/* Hero Area Start */}
      <section className="hero-area bgc-black pt-200 rpt-120 rel z-2">
        <div className="container-fluid">
          <Slider {...sliderProps.heroBanner}>
            <div>
              <h1
                className="hero-title"
                data-aos="flip-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {t("Banner.title1")}
              </h1>
              <div
                className="main-hero-image bgs-cover"
                style={{ backgroundImage: "url(/assets/images/hero/hero.jpg)" }}
              />
            </div>
            <div>
              <h1
                className="hero-title"
                data-aos="flip-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {t("Banner.title2")}
              </h1>
              <div
                className="main-hero-image bgs-cover"
                style={{ backgroundImage: "url(/assets/images/hero/hero2.jpg)" }}
              />
            </div>
            <div>
              <h1
                className="hero-title"
                data-aos="flip-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {t("Banner.title3")}
              </h1>
              <div
                className="main-hero-image bgs-cover"
                style={{ backgroundImage: "url(/assets/images/hero/hero3.jpg)" }}
              />
            </div>
          </Slider>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Destinations Area start */}
      <section className="destinations-area bgc-black pt-100 pb-70 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-white text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>{t("Destination.title")}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div
                className="destination-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting"></div>
                  <img
                    src="/assets/images/destinations/visiting-place1.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" />{" "}
                    {t("Destination.samarkand")},{t("Destination.uzbekistan")}
                  </span>
                  <h5>
                    <Link href="/trip">{t("Destination.registan")}</Link>
                  </h5>
                </div>
                <div className="destination-footer">
                  <a href="/trip" className="read-more">
                    {t("Destination.booknow")}{" "}
                    <i className="fal fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div
                className="destination-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting"></div>
                  <img
                    src="/assets/images/destinations/visiting-place2.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" />
                    {t("Destination.aral")},{t("Destination.uzbekistan")}
                  </span>
                  <h5>
                    <Link href="/trip">{t("Destination.aral")}</Link>
                  </h5>
                </div>
                <div className="destination-footer">
                  <a href="/trip" className="read-more">
                    {t("Destination.booknow")}{" "}
                    <i className="fal fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div
                className="destination-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting"></div>
                  <img
                    src="/assets/images/destinations/visiting-place3.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" />
                    {t("Destination.khiva")},{t("Destination.uzbekistan")}
                  </span>
                  <h5>
                    <Link href="/trip">{t("Destination.itchan")}</Link>
                  </h5>
                </div>
                <div className="destination-footer">
                  <a href="/trip" className="read-more">
                    {t("Destination.booknow")}
                    <i className="fal fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div
                className="destination-item"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting"></div>
                  <img
                    src="/assets/images/destinations/visiting-place4.jpg"
                    alt="Destination"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" />{" "}
                    {t("Destination.navoiy")},{t("Destination.uzbekistan")}
                  </span>
                  <h5>
                    <Link href="/trip">{t("Destination.kyzylkum")}</Link>
                  </h5>
                </div>
                <div className="destination-footer">
                  <a href="/trip" className="read-more">
                    {t("Destination.booknow")}
                    <i className="fal fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Destinations Area end */}
      {/* Popular Destinations Area start */}
      <section className="popular-destinations-area rel z-1">
        <div className="container-fluid">
          <div className="popular-destinations-wrap br-20 bgc-lighter pt-100 pb-70">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  className="section-title text-center counter-text-wrap mb-40"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>{t("Destination.title2")}</h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="/assets/images/destinations/destination1.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content align-content-center">
                      <h6>
                        <Link href="/gallery/samarkand">
                          {t("Destination.samarkand")},
                          {t("Destination.uzbekistan")}
                        </Link>
                      </h6>
                      <a href="/gallery/samarkand" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="/assets/images/destinations/destination2.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/gallery/bukhara">
                          {t("Destination.bukhara")},
                          {t("Destination.uzbekistan")}
                        </Link>
                      </h6>
                      <a href="/gallery/bukhara" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="/assets/images/destinations/destination3.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/gallery/aral">
                          {t("Destination.aral")},{t("Destination.uzbekistan")}
                        </Link>
                      </h6>
                      <a href="/gallery/aral" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="/assets/images/destinations/destination4.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/gallery/kyzylkum">
                          {t("Destination.kyzylkum")},
                          {t("Destination.uzbekistan")}
                        </Link>
                      </h6>
                      <a href="/gallery/kyzylkum" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="/assets/images/destinations/destination5.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/gallery/amirsoy">
                          {t("Destination.amirsoy")},
                          {t("Destination.uzbekistan")}
                        </Link>
                      </h6>
                      <a href="/gallery/amirsoy" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="/assets/images/destinations/destination6.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/gallery/khiva">
                          {t("Destination.khiva")},{t("Destination.uzbekistan")}
                        </Link>
                      </h6>
                      <a href="/gallery/khiva" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Destinations Area end */}
      {/* Features Area start */}
      <section className="contact-info-area bgc-black pt-100 pb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="contact-info-content mb-30 rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>{t("Expert.title1")}</h2>
                </div>
                <p>{t("Expert.text1")}</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={100}
                  >
                    <div
                      className="expert-photo"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      data-aos-delay={100}
                    >
                      <div className="icon">
                        <i className="fas fa-user" />
                      </div>
                    </div>
                    <h5>{t("Expert.expert1")}</h5>
                    <div className="content">
                      <p>{t("Submenu.visa")}</p>
                      <div className="text">
                        <i className="far fa-phone" /> +998 93 183 89 37
                      </div>
                      <div className="text">
                        <i className="far fa-phone" /> +998 90 099 40 94
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={100}
                  >
                    <div
                      className="expert-photo"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      data-aos-delay={100}
                    >
                      <div className="icon">
                        <i className="fas fa-user" />
                      </div>
                    </div>
                    <div className="content pb-33">
                      <h5>{t("Expert.expert2")}</h5>
                      <p>{t("Submenu.ticket")}</p>
                      <div className="text">
                        <i className="far fa-phone" /> +998 93 713 24 22
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={100}
                  >
                    <div
                      className="expert-photo"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      data-aos-delay={100}
                    >
                      <div className="icon">
                        <i className="fas fa-user" />
                      </div>
                    </div>
                    <div className="content">
                      <h5>{t("Expert.expert3")}</h5>
                      <p>{t("Submenu.trip")}</p>
                      <div className="text">
                        <i className="far fa-phone" /> +998 77 011 07 09
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    data-aos-delay={100}
                  >
                    <div
                      className="expert-photo"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      data-aos-delay={100}
                    >
                      <div className="icon">
                        <i className="fas fa-user" />
                      </div>
                    </div>
                    <div className="content">
                      <h5>{t("Expert.expert4")}</h5>
                      <p>{t("Submenu.moving")}</p>
                      <div className="text">
                        <i className="far fa-phone" /> +998 90 651 66 22
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* CTA Area start */}
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
                      className="theme-btn style-three mt-30 mb-20"
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
          {/* Client Logo Area start */}
          <div className="client-logo-area mt-100">
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
        </div>
      </section>
      {/* About Area end */}
      {/* Blog Area start */}
      {/* <section className="blog-area py-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Latest News & Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="#" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="#">
                      Ultimate Guide to Planning Your Dream Vacation with Travel
                      Agency
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="/assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <Link href="#" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="#" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="#">
                      Unforgettable Adventures Travel Agency Bucket List
                      Experiences
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="/assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <Link href="#" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="#" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="#">
                      Exploring Culture and way Cuisine Travel Agency's they
                      Best Foodie Destinations
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="/assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <Link href="#" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default page;
