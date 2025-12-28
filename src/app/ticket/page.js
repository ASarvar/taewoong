"use client";
import Banner from "@/src/components/Banner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner pageTitle={t("Submenu.ticket")} pageName={t("Submenu.ticket")} />
      {/* Air Ticket / Pickup Service Area start */}
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
                  <span data-hover={t("Expert.expert2")}>
                    {t("Expert.expert2")}
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
                  href={`tel:${t("Expert.expert2Phone")}`}
                  className="theme-btn style-two bgc-secondary"
                >
                  <i className="fal fa-phone-volume pr-10 pb-10" />
                  <span data-hover={t("Expert.expert2Phone")}>
                    {t("Expert.expert2Phone")}
                  </span>
                </Link>
              </div>
            </div>
            {/* Air Ticket / Pickup Service Area start */}
            <div className="col-lg-4">
              <div
                className="gallery-two-item hover-content"
                data-aos="flip-right"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="/assets/images/team/air.jpg" alt="Guide" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <div className="destination-header">
                    <h5>{t("Service.title1")}</h5>
                  </div>
                  <p>{t("Service.text1")}</p>
                  <p>{t("Service.text2")}</p>
                  <ul className="list-style-four mt-35">
                    <li>{t("Service.text3")}</li>
                    <li>{t("Service.text4")}</li>
                    <li>{t("Service.text5")}</li>
                  </ul>
                  <p>{t("Service.text6")}</p>
                  <p>{t("Service.train")}</p>
                </div>
              </div>
              {/* <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <div className="destination-header">
                    <h5>{t("Service.title2")}</h5>
                  </div>
                  <p>{t("Service.text7")}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Air Ticket / Pickup Service Area end */}
    </Layout>
  );
};

export default page;
