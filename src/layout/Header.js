"use client";
import Link from "next/link";
import { Fragment } from "react";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";

const Menu = ({ logoSrc }) => {
  const { t } = useTranslation();
  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header pb-10 pt-10">
          <div className="mobile-logo">
            <Link href="/">
              <img src={logoSrc} alt="Logo" title="Logo" />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown current">
              <Link href="/">{t("Menu.home")}</Link>
            </li>
            <li className="dropdown">
              <Link href="/about">{t("Menu.about")}</Link>
            </li>
            <li className="dropdown">
              <a href="#">{t("Menu.service")}</a>
              <ul>
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
              <div className="dropdown-btn">
                <span className="far fa-angle-down" />
              </div>
            </li>
            <li className="dropdown">
              <Link href="/gallery">{t("Menu.gallery")}</Link>
            </li>
            <li className="dropdown">
              <Link href="/contact">{t("Menu.contact")}</Link>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    default:
      return <Header3 />;
  }
};
export default Header;

const Header1 = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <header className="main-header header-one white-menu menu-absolute fixed-header">
        {/*Header-Upper*/}
        <div className="header-upper py-20 rpy-0">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                {/* Main Menu */}
                <Menu logoSrc="/assets/images/logos/logo.png" />
                {/* Main Menu End*/}
              </div>
              <LanguageSelector />
              {/* Menu Button */}
              <div className="menu-btns py-10">
                <Link
                  href="tel:+998712302339"
                  className="theme-btn style-two bgc-secondary"
                >
                  <i className="fal fa-phone-volume pr-10 pb-10" />
                  <span data-hover="+998 71 230 23 39">+998 71 230 23 39</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    </Fragment>
  );
};

const Header3 = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <header className="main-header header-one">
        {/*Header-Upper*/}
        <div className="header-upper bg-white py-20 rpy-0">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/assets/images/logos/logo-two.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                {/* Main Menu */}
                <Menu logoSrc="/assets/images/logos/logo-two.png" />
                {/* Main Menu End*/}
              </div>
              <LanguageSelector />
              {/* Menu Button */}
              <div className="menu-btns py-10">
                <Link
                  href="tel:+998712302339"
                  className="theme-btn style-two bgc-secondary"
                >
                  <i className="fal fa-phone-volume pr-10 pb-10" />
                  <span data-hover="+998 71 230 23 39">+998 71 230 23 39</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    </Fragment>
  );
};
