"use client";

import Banner from "@/src/components/Banner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner pageTitle={t("Menu.contact")} />
      {/* Contact Info Area start */}
      <section className="contact-info-area pt-100 pb-40 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="mb-30 rmb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="mb-30 text-center">
                  <h2>{t("Contact.title1")}</h2>
                </div>
                <p className="text-center">{t("Contact.text1")}</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
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
                        <i className="fas fa-envelope" />
                      </div>
                    </div>
                    <div className="content">
                      <h5>{t("Contact.subtitle1")}</h5>
                      <div className="text">
                        <i className="far fa-envelope" />{" "}
                        <a href="mailto:&#116;&#103;&#108;&#95;&#116;&#114;&#97;&#118;&#101;&#108;&#64;&#101;&#45;&#116;&#103;&#108;&#46;&#99;&#111;&#109;">
                          tgl_travel@e-tgl.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
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
                        <i className="fas fa-phone" />
                      </div>
                    </div>
                    <div className="content">
                      <h5>{t("Contact.subtitle2")}</h5>
                      <div className="text">
                        <i className="far fa-phone" />{" "}
                        <a href="callto:+998712302339">+998 71 230 23 39</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
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
                        <i className="fab fa-telegram" />
                      </div>
                    </div>
                    <div className="content">
                      <h5>{t("Contact.subtitle4")}</h5>
                      <div className="text">
                        <Link
                          href="https://t.me/taewoong_travel"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-telegram" />
                          @taewoong_travel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
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
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="content">
                      <h5>{t("Contact.subtitle5")}</h5>
                      <div className="text">
                        <Link
                          href="https://instagram.com/_taewoong_travel"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram" />
                          _taewoong_travel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
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
                        <i className="fas fa-map-marker-alt" />
                      </div>
                    </div>
                    <div className="content">
                      <h5>{t("Contact.subtitle3")}</h5>
                      <div className="text">
                        <i className="fal fa-map-marker-alt" />{" "}
                        {t("Footer.address")}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="contact-info-item"
                          data-aos="fade-up"
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
                              <i className="far fa-phone" />{" "}
                              <a href="callto:+0001234588">+998 93 183 89 37</a>
                            </div>
                            <div className="text">
                              <i className="far fa-phone" />{" "}
                              <a href="callto:+0001234588">+998 90 099 40 94</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="contact-info-item"
                          data-aos="fade-up"
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
                              <i className="far fa-phone" />{" "}
                              <a href="callto:+0001234588">+998 93 713 24 22</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="contact-info-item"
                          data-aos="fade-up"
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
                              <i className="far fa-phone" />{" "}
                              <a href="callto:+0001234588">+998 77 011 07 09</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="contact-info-item"
                          data-aos="fade-up"
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
                              <i className="far fa-phone" />{" "}
                              <a href="callto:+0001234588">+998 90 651 66 22</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10 rmt-75">
              <div className="blog-sidebar">
                <div
                  className="widget widget-category"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">{t("Menu.service")}</h5>
                  <ul className="list-style-three">
                    <li>
                      <Link href="/visa">{t("Submenu.visa")}</Link>
                    </li>
                    <li>
                      <Link href="/ticket">{t("Submenu.ticket")}</Link>
                    </li>
                    <li>
                      <Link href="/trip">{t("Submenu.trip")}</Link>
                    </li>
                    <li>
                      <Link href="/moving">{t("Submenu.moving")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Map Start */}
      <div
        className="contact-map mt-60 "
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
        data-aos-delay={100}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d445.60046335549356!2d69.27469648191595!3d41.295142123888105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bc4a7b98a63%3A0xc38ce5b2ece1e587!2sTaewoong!5e0!3m2!1sen!2sus!4v1728967290812!5m2!1sen!2sus"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* <div
        className="contact-map mt-120 mb-100"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
        data-aos-delay={100}
      >
        <div style={{ position: "relative" }}>
          <iframe
            src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.274110%2C41.295096&mode=whatshere&source=mapframe&tab=inside&utm_source=mapframe&whatshere%5Bpoint%5D=69.274005%2C41.295029&whatshere%5Bzoom%5D=17&z=20.2"
            width="100%"
            height="400"
            frameBorder="1"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div> */}
      {/* Contact Map End */}
    </Layout>
  );
};
export default page;
