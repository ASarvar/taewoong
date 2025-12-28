import Counter from "@/src/components/Counter";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    default:
      return <Footer2 />;
  }
};
export default Footer;

const Footer1 = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  return (
    <footer
      className="main-footer bgs-cover overlay rel z-1 pb-25"
      style={{
        backgroundImage: "url(/assets/images/backgrounds/footer.jpg)",
      }}
    >
      <div className="container">
        <div className="footer-top pt-100 pb-30">
          <div className="row justify-content-between">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="/assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
                <p>{t("Footer.text1")}</p>
                <div className="social-style-one mt-15">
                  <Link
                    href="https://t.me/taewoong_travel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram" />
                  </Link>
                  <Link
                    href="https://instagram.com/_taewoong_travel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title counter-text-wrap mb-35">
                <div
                  className="col-md-10 col-10 col-small"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="footer-widget footer-contact">
                    <div className="footer-title">
                      <h5>{t("Footer.company")}</h5>
                    </div>
                    <ul className="list-style-one">
                      {currentLanguage !== "Kr" && (
                        <li>
                          <i className="fal fa-user" /> {t("Footer.director")}
                          {":  "}
                          {t("Footer.directorName")}
                        </li>
                      )}
                      <li>
                        <i className="fal fa-map-marked-alt" />{" "}
                        {t("Footer.address")}
                      </li>
                      <li>
                        <i className="fal fa-envelope" />{" "}
                        <a href="mailto:&#116;&#103;&#108;&#95;&#116;&#114;&#97;&#118;&#101;&#108;&#64;&#101;&#45;&#116;&#103;&#108;&#46;&#99;&#111;&#109;">
                          tgl_travel@e-tgl.com
                        </a>
                      </li>
                      <li>
                        <i className="fal fa-clock" /> {t("Footer.workhours")}
                      </li>
                      <li>
                        <i className="fal fa-phone-volume" />{" "}
                        <a href="callto:+998712302339">+998 71 230 23 39</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  @ 2024 <a href="/">{t("Footer.name")}</a>,{" "}
                  {t("Footer.copyright")}
                </p>
              </div>
            </div>
            {/* <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Terms</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  const { t } = useTranslation();
  return (
    <footer
      className={`main-footer footer-two bgp-bottom bgc-black rel z-15 pt-100 pb-115
      }`}
      style={{
        backgroundImage: "url(/assets/images/backgrounds/footer-two.png)",
      }}
    >
      <div className="widget-area">
        <div className="container">
          <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-40">
                  <Link href="/">
                    <img src="/assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="footer-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d445.60046335549356!2d69.27469648191595!3d41.295142123888105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bc4a7b98a63%3A0xc38ce5b2ece1e587!2sTaewoong!5e0!3m2!1sen!2sus!4v1728967290812!5m2!1sen!2sus"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-sm-5">
                <div className="footer-title">
                  <h5>{t("Menu.service")}</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="#">{t("Submenu.visa")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("Submenu.ticket")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("Submenu.trip")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("Submenu.moving")}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-md-5 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>{t("Footer.company")}</h5>
                </div>
                <ul className="list-style-one">
                  <li>
                    <i className="fal fa-map-marked-alt" />
                    {t("Footer.address")}
                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:&#116;&#103;&#108;&#95;&#116;&#114;&#97;&#118;&#101;&#108;&#64;&#101;&#45;&#116;&#103;&#108;&#46;&#99;&#111;&#109;">
                      tgl_travel@e-tgl.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-phone-volume" />{" "}
                    <a href="callto:+998712302339">+998 71 230 23 39</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-transparent pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  @ 2024 <a href="/">{t("Footer.name")}</a>,{" "}
                  {t("Footer.copyright")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
