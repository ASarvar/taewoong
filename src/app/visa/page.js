"use client";
import { useState } from "react";
import Banner from "@/src/components/Banner";
import RaveloAccordion from "@/src/components/Accordion";
import Layout from "@/src/layout/Layout";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { visaEn } from "@/src/components/VisaEn";
import { visaRu } from "@/src/components/VisaRu";
import { visaKr } from "@/src/components/VisaKr";
import { visaUz } from "@/src/components/VisaUz";
import Link from "next/link";

const page = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [active, setActive] = useState("collapse0");

  // Select visa items based on current language
  const visaItems =
    i18n.language === "En"
      ? visaEn
      : i18n.language === "Ru"
      ? visaRu
      : i18n.language === "Kr"
      ? visaKr
      : visaUz;

  return (
    <Layout>
      <Banner pageTitle={t("Submenu.visa")} pageName={t("Submenu.visa")} />
      {/* FAQs Area start */}
      <section className="faq-page-area pt-60 pb-200 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="section-title text-center counter-text-wrap mb-10"
              data-aos="fade-down"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>{t("Visa.maintitle")}</h2>

              {/* Conditionally render the FAQ area only in Ru and Uz */}
              {(i18n.language === "Ru" || i18n.language === "Uz") && (
                <div
                  className="theme-btn style-two bgc-primary"
                  style={{
                    display: "inline-block",
                    padding: "10px 40px",
                  }}
                >
                  {t("Visa.content1")}{" "}
                  <i
                    className="fal fa-arrow-right pl-30"
                    style={{ transform: "rotate(0deg)" }}
                  />
                  <a
                    className="pl-30"
                    href="/assets/docs/application.pdf"
                    download
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      marginLeft: "10px",
                    }}
                  >
                    {t("Visa.title1")}
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* FAQs Area end */}
          {/* Expert Contact Section */}
          <div className="expert-info pb-20">
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
                <span data-hover={t("Expert.expert1")}>
                  {t("Expert.expert1")}
                </span>
              </div>
            </div>
            <div
              className="py-10"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Link
                href={`tel:${t("Expert.expert1Phone1")}`}
                className="theme-btn style-two bgc-secondary"
              >
                <i className="fal fa-phone-volume pr-10 pb-10" />
                <span data-hover={t("Expert.expert1Phone1")}>
                  {t("Expert.expert1Phone1")}
                </span>
              </Link>
            </div>
            <div
              className="py-10"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Link
                href={`tel:${t("Expert.expert1Phone2")}`}
                className="theme-btn style-two bgc-secondary"
              >
                <i className="fal fa-phone-volume pr-10 pb-10" />
                <span data-hover={t("Expert.expert1Phone2")}>
                  {t("Expert.expert1Phone2")}
                </span>
              </Link>
            </div>
          </div>
          {/* Visas Section */}
          <div className="col-xl-12">
            <Accordion className="accordion-two" defaultActiveKey={active}>
              {visaItems.map((data, i) => (
                <RaveloAccordion
                  title={data.title}
                  key={data.id}
                  event={`collapse${i}`}
                  onClick={() =>
                    setActive(active === `collapse${i}` ? "" : `collapse${i}`)
                  }
                  active={active}
                  content={data.content}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default page;
