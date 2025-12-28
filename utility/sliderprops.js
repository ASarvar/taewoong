export const sliderProps = {
  testimonials: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  },
  destination: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  hotDeals: {
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  client: {
    speed: 400,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: false,
    centerMode: false,
    swipeToSlide: true,  // Enables free scrolling
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  },
  gallery: {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  heroBanner: {
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    infinite: true,
    pauseOnHover: false,
    speed: 1000, // Adjust the speed for transitions
    arrows: false, // You can enable arrows if needed
    dots: true, // Enable dots for navigation
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 5000, // 5 seconds delay between slides
    fade: true, // Enable fade effect
    cssEase: "linear", // Smooth transitions
    responsive: [
      {
        breakpoint: 1200, // For large screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
      {
        breakpoint: 768, // For medium screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
      {
        breakpoint: 480, // For small screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          dots: false, // Disable dots for very small screens (optional)
        },
      },
    ],
  },
  product: {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
};
