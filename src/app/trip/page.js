"use client";

import Banner from "@/src/components/Banner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const page = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (tourId) => {
    setShowMore((prev) => ({
      ...prev,
      [tourId]: !prev[tourId],
    }));
  };
  return (
    <Layout>
      <Banner pageTitle={t("Submenu.trip")} pageName={t("Submenu.trip")} />

      <section className="tour-list-page py-60 rel z-1">
        <div className="container">
          <div className="row">
            {/* Expert Contact Section */}
            <div className="expert-info pb-30">
              <div
                className="py-10"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="theme-btn style-two bgc-secondary">
                  <i
                    className="fal fa-user pr-10"
                    style={{ transform: "rotate(0deg)" }}
                  />
                  <span data-hover={t("Expert.expert3")}>
                    {t("Expert.expert3")}
                  </span>
                </div>
              </div>
              <div
                className="py-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link
                  href={`tel:${t("Expert.expert3Phone")}`}
                  className="theme-btn style-two bgc-secondary"
                >
                  <i className="fal fa-phone-volume pr-10 pb-10" />
                  <span data-hover={t("Expert.expert3Phone")}>
                    {t("Expert.expert3Phone")}
                  </span>
                </Link>
              </div>
            </div>
            {/* Tour List Area start */}
            <div className="col-lg-12">
              {/* Samarkand */}
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge bgc-pink">{t("Trip.feature")}</span>
                  <img
                    src="/assets/images/destinations/tour-list1.jpg"
                    alt="Samarkand"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" />
                      {t("Destination.samarkand")},{t("Destination.uzbekistan")}
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>{t("Trip.title1")}</h5>
                  <p>{t("Trip.text1")}</p>
                  {showMore["samarkand"] ? (
                    <>
                      <div className="tour-include-exclude mt-30">
                        <h6>{t("Trip.include")}</h6>
                        <ul className="list-style-one check mt-25">
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.hotel")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.ticket")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.guide")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.tax")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.insurance")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.transport")}
                          </li>
                        </ul>
                        <i>{t("Trip.hotelInfo")}</i>
                      </div>
                      <div className="tour-include-exclude mt-30">
                        <h6>{t("Trip.exclude")}</h6>
                        <ul className="list-style-one mt-25">
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.expenses")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.baggage")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.tip")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.entrance")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.meals")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.visa")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.lounge")}
                          </li>
                        </ul>
                      </div>
                      <p>{t("Trip.textInfo")}</p>
                    </>
                  ) : null}
                  <div className="destination-footer">
                    <button
                      onClick={() => toggleShowMore("samarkand")}
                      className="theme-btn style-two style-three pb-20"
                    >
                      {showMore["samarkand"]
                        ? t("Trip.closeDetails")
                        : t("Trip.tourDetails")}
                    </button>
                    <Link
                      href="/gallery/samarkand"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover={t("Trip.more")}>{t("Trip.more")}</span>{" "}
                      <i className="fal fa-arrow-right pl-10 pt-10" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Aral Sea */}
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/destinations/tour-list2.jpg"
                    alt="Aral Sea"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" />{" "}
                      {t("Destination.aral")},{t("Destination.uzbekistan")}
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>{t("Trip.title2")}</h5>
                  <p>{t("Trip.text2")}</p>
                  <div>
                    {showMore["aral"] ? (
                      <>
                        <div className="tour-include-exclude mt-30">
                          <h6>{t("Trip.include")}</h6>
                          <ul className="list-style-one check mt-25">
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.yurt")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.meals2")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.ticket")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.guide")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.tax")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.insurance")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.transport")}
                            </li>
                          </ul>
                        </div>
                        <div className="tour-include-exclude mt-30">
                          <h6>{t("Trip.exclude")}</h6>
                          <ul className="list-style-one mt-25">
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.baggage")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.tip")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.visa")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.lounge")}
                            </li>
                          </ul>
                        </div>
                        <p>{t("Trip.textInfo")}</p>
                      </>
                    ) : null}
                  </div>
                  <div className="destination-footer">
                    <button
                      onClick={() => toggleShowMore("aral")}
                      className="theme-btn style-two style-three pb-20"
                    >
                      {showMore["aral"]
                        ? t("Trip.closeDetails")
                        : t("Trip.tourDetails")}
                    </button>
                    <Link
                      href="/gallery/aral"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover={t("Trip.more")}>{t("Trip.more")}</span>
                      <i className="fal fa-arrow-right pl-10 pt-10" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Bukhara */}
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/destinations/tour-list3.jpg"
                    alt="Bukhara"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" />{" "}
                      {t("Destination.bukhara")},{t("Destination.uzbekistan")}
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>{t("Trip.title3")}</h5>
                  <p>{t("Trip.text3")}</p>
                  {showMore["bukhara"] ? (
                    <>
                      <div className="tour-include-exclude mt-30">
                        <h6>{t("Trip.include")}</h6>
                        <ul className="list-style-one check mt-25">
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.hotel")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.ticket")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.guide")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.tax")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.insurance")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.transport")}
                          </li>
                        </ul>
                        <i>{t("Trip.hotelInfo")}</i>
                      </div>
                      <div className="tour-include-exclude mt-30">
                        <h6>{t("Trip.exclude")}</h6>
                        <ul className="list-style-one mt-25">
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.expenses")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.baggage")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.tip")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.entrance")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.meals")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.visa")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.lounge")}
                          </li>
                        </ul>
                      </div>
                      <p>{t("Trip.textInfo")}</p>
                    </>
                  ) : null}
                  <div className="destination-footer">
                    <button
                      onClick={() => toggleShowMore("bukhara")}
                      className="theme-btn style-two style-three pb-20"
                    >
                      {showMore["bukhara"]
                        ? t("Trip.closeDetails")
                        : t("Trip.tourDetails")}
                    </button>
                    <Link
                      href="/gallery/bukhara"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover={t("Trip.more")}>{t("Trip.more")}</span>
                      <i className="fal fa-arrow-right pl-10 pt-10" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Kyzylkum */}
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/destinations/tour-list4.jpg"
                    alt="Kyzylkum Desert and Aydarkul"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" />{" "}
                      {t("Destination.navoiy")},{t("Destination.uzbekistan")}
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>{t("Trip.title4")}</h5>
                  <p>{t("Trip.text4")}</p>
                  <div>
                    {showMore["kyzylkum"] ? (
                      <>
                        <div className="tour-include-exclude mt-30">
                          <h6>{t("Trip.include")}</h6>
                          <ul className="list-style-one check mt-25">
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.yurt")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.meals2")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.ticket")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.guide")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.tax")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.insurance")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.transport")}
                            </li>
                          </ul>
                        </div>
                        <div className="tour-include-exclude mt-30">
                          <h6>{t("Trip.exclude")}</h6>
                          <ul className="list-style-one mt-25">
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.baggage")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.tip")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.visa")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.lounge")}
                            </li>
                          </ul>
                        </div>
                        <p>{t("Trip.textInfo")}</p>
                      </>
                    ) : null}
                  </div>
                  <div className="destination-footer">
                    <button
                      onClick={() => toggleShowMore("kyzylkum")}
                      className="theme-btn style-two style-three pb-20"
                    >
                      {showMore["kyzylkum"]
                        ? t("Trip.closeDetails")
                        : t("Trip.tourDetails")}
                    </button>
                    <Link
                      href="/gallery/kyzylkum"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover={t("Trip.more")}>{t("Trip.more")}</span>
                      <i className="fal fa-arrow-right pl-10 pt-10" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Amirsoy */}
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/destinations/tour-list5.jpg"
                    alt="Amirsoy"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" />{" "}
                      {t("Destination.tashkent")},{t("Destination.uzbekistan")}
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>{t("Trip.title5")}</h5>
                  <p>{t("Trip.text5")}</p>
                  <div>
                    {showMore["amirsoy"] ? (
                      <>
                        <div className="tour-include-exclude mt-30">
                          <h6>{t("Trip.include")}</h6>
                          <ul className="list-style-one check mt-25">
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.accommodation")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.meals3")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.ticket")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.tax")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.insurance")}
                            </li>
                            <li>
                              <i className="far fa-check" />
                              {t("Trip.transport")}
                            </li>
                          </ul>
                        </div>
                        <div className="tour-include-exclude mt-30">
                          <h6>{t("Trip.exclude")}</h6>
                          <ul className="list-style-one mt-25">
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.baggage")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.tip")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.snow")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.visa")}
                            </li>
                            <li>
                              <i className="far fa-times" />
                              {t("Trip.lounge")}
                            </li>
                          </ul>
                        </div>
                        <p>{t("Trip.textInfo")}</p>
                      </>
                    ) : null}
                  </div>
                  <div className="destination-footer">
                    <button
                      onClick={() => toggleShowMore("amirsoy")}
                      className="theme-btn style-two style-three pb-20"
                    >
                      {showMore["amirsoy"]
                        ? t("Trip.closeDetails")
                        : t("Trip.tourDetails")}
                    </button>
                    <Link
                      href="/gallery/amirsoy"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover={t("Trip.more")}>{t("Trip.more")}</span>
                      <i className="fal fa-arrow-right pl-10 pt-10" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Khiva */}
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/destinations/tour-list6.jpg"
                    alt="Khiva"
                  />
                </div>
                <div className="content">
                  <div className="destination-header">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" />{" "}
                      {t("Destination.khiva")},{t("Destination.uzbekistan")}
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <h5>{t("Trip.title6")}</h5>
                  <p>{t("Trip.text6")}</p>
                  {showMore["khiva"] ? (
                    <>
                      <div className="tour-include-exclude mt-30">
                        <h6>{t("Trip.include")}</h6>
                        <ul className="list-style-one check mt-25">
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.hotel")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.ticket")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.guide")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.tax")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.insurance")}
                          </li>
                          <li>
                            <i className="far fa-check" />
                            {t("Trip.transport")}
                          </li>
                        </ul>
                        <i>{t("Trip.hotelInfo")}</i>
                      </div>
                      <div className="tour-include-exclude mt-30">
                        <h6>{t("Trip.exclude")}</h6>
                        <ul className="list-style-one mt-25">
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.expenses")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.baggage")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.tip")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.entrance")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.meals")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.visa")}
                          </li>
                          <li>
                            <i className="far fa-times" />
                            {t("Trip.lounge")}
                          </li>
                        </ul>
                      </div>
                      <p>{t("Trip.textInfo")}</p>
                    </>
                  ) : null}
                  <div className="destination-footer">
                    <button
                      onClick={() => toggleShowMore("khiva")}
                      className="theme-btn style-two style-three pb-20"
                    >
                      {showMore["khiva"]
                        ? t("Trip.closeDetails")
                        : t("Trip.tourDetails")}
                    </button>
                    <Link
                      href="/gallery/khiva"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover={t("Trip.more")}>{t("Trip.more")}</span>
                      <i className="fal fa-arrow-right pl-10 pt-10" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tour List Area end */}
    </Layout>
  );
};
export default page;
