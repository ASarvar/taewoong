"use client";

import Banner from "@/src/components/Banner";
import Layout from "@/src/layout/Layout";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const page = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner pageTitle={t("Submenu.moving")} pageName={t("Submenu.moving")} />

      {/* Moving Services Area start */}
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
                  <span data-hover={t("Expert.expert4")}>
                    {t("Expert.expert4")}
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
                  href={`tel:${t("Expert.expert4Phone")}`}
                  className="theme-btn style-two bgc-secondary"
                >
                  <i className="fal fa-phone-volume pr-10 pb-10" />
                  <span data-hover={t("Expert.expert4Phone")}>
                    {t("Expert.expert4Phone")}
                  </span>
                </Link>
              </div>
            </div>

            {/* Moving Services Section */}
            <div className="col-lg-4">
              <div
                className="gallery-two-item hover-content"
                data-aos="flip-right"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="/assets/images/team/moving.jpg" alt="Guide" />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div
                className="destination-item style-three bgc-lighter mb-4"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <div className="destination-header">
                    <h5>{t("Service.title3")}</h5>
                  </div>
                  <p>{t("Service.text8")}</p>
                  <p>{t("Service.text9")}</p>
                  <ul className="list-style-four mt-35">
                    <li>{t("Service.text10")}</li>
                    <li>{t("Service.text11")}</li>
                    <li>{t("Service.text12")}</li>
                  </ul>
                  <p>{t("Service.text13")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Moving Services Area end */}
    </Layout>
  );
};

export default page;
