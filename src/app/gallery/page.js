'use client'
import Banner from "@/src/components/Banner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const page = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner pageTitle={t("Menu.gallery")} />
      {/* Gallery Area start */}
      <section className="gallery-two-area py-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>{t("Gallery.title1")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Samarkand */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/gallery/gallery1.jpg"
                    alt="Samarkand"
                  />
                  <Link href="/gallery/samarkand" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">{t("Gallery.subtitle1")}</span>
                  <h5>
                    <Link href="/gallery/samarkand">{t("Destination.samarkand")}</Link>
                  </h5>
                </div>
              </div>
            </div>

            {/* Bukhara */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="/assets/images/gallery/gallery2.jpg" alt="Bukhara" />
                  <Link href="/gallery/bukhara" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">{t("Gallery.subtitle1")}</span>
                  <h5>
                    <Link href="/gallery/bukhara">{t("Destination.bukhara")}</Link>
                  </h5>
                </div>
              </div>
            </div>
            {/* Aral Sea */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/gallery/gallery3.jpg"
                    alt="Aral Sea"
                  />
                  <Link href="/gallery/aral" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">{t("Gallery.subtitle1")}</span>
                  <h5>
                    <Link href="/gallery/aral">{t("Destination.aral")}</Link>
                  </h5>
                </div>
              </div>
            </div>

            {/* Kyzylkum-Aydarkul */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/gallery/gallery4.jpg" // Update with the correct image path
                    alt="Kyzylkum-Aydarkul"
                  />
                  <Link href="/gallery/kyzylkum" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">{t("Gallery.subtitle1")}</span>
                  <h5>
                    <Link href="/gallery/kyzylkum">
                    {t("Destination.kyzylkum")}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

            {/* Amirsoy */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="/assets/images/gallery/gallery5.jpg" alt="Amirsoy" />
                  <Link href="/gallery/amirsoy" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">{t("Gallery.subtitle1")}</span>
                  <h5>
                    <Link href="/gallery/amirsoy">{t("Destination.amirsoy")}</Link>
                  </h5>
                </div>
              </div>
            </div>

            {/* Khiva */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="/assets/images/gallery/gallery6.jpg" alt="Khiva" />
                  <Link href="/gallery/khiva" className="link">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <span className="category">{t("Gallery.subtitle1")}</span>
                  <h5>
                    <Link href="/gallery/khiva">{t("Destination.khiva")}</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Area end */}
      {/* Newsletter Area start */}
      {/* <Subscribe /> */}
      {/* Newsletter Area end */}
    </Layout>
  );
};
export default page;
