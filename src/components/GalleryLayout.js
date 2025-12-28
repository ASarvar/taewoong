// src/components/PageBanner.js
'use client'

import Link from "next/link";
import { useTranslation } from "react-i18next";

const GalleryLayout = ({ city }) => {
  const { t } = useTranslation();

  return (
    <section className="page-banner-two rel z-1">
      <div className="container-fluid">
        <hr className="mt-0" />
        <div className="container">
          <div className="banner-inner pt-15 pb-25">
            <h2 className="page-title mb-10">
              {t(`Destination.${city}`)}, {t(`Destination.uzbekistan`)}
            </h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-20">
                <li className="breadcrumb-item">
                  <Link href="/">{t("Menu.home")}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/gallery">{t("Menu.gallery")}</Link>
                </li>
                <li className="breadcrumb-item active">
                  {t(`Destination.${city}`)}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryLayout;
