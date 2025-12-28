"use client";

import { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const Gallery = ({ images }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });

  const openLightboxOnSlide = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1, // FsLightbox uses 1-based index
    });
  };

  return (
    <>
      <div className="galleryContainer">
        {images.map((image, index) => (
          <div
            key={index}
            className="galleryItem"
            onClick={() => openLightboxOnSlide(index)}
          >
            <Image
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              width={400} // Set width explicitly
              height={300} // Set height explicitly
              style={{ objectFit: "cover" }} // Use style for objectFit
              className="galleryImage"
              unoptimized={true} // To ensure better control over optimization
              priority={index === 0} // Add priority to the first image
            />
          </div>
        ))}
      </div>

      {/* FsLightbox for fullscreen viewing */}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images.map((image) => image.src)}
        slide={lightboxController.slide}
      />
    </>
  );
};

export default Gallery;
