import React from "react";
import ReactDOM from "react-dom/client";
import logo from './navLogo.svg';

const restaurants = [
  {
    info: {
      id: "45606",
      name: "Domino's Pizza",
      cloudinaryImageId: "092e58460657922e098a8afd5db838fe",
      locality: "Jhotwara",
      areaName: "Jhotwara",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-06 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "Ratnesh_Badges/free%20del%20icon.png",
            shortDescription: "Free Delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Ratnesh_Badges/free%20del%20icon.png",
                  shortDescription: "Free Delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-jhotwara-jaipur-45606",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "57722",
      name: "Dmb(Doodh Misthan Bhandar)",
      cloudinaryImageId: "mwxhhhmz9gdap5zrcojj",
      locality: "Golpark",
      areaName: "Bani Park",
      costForTwo: "₹300 for two",
      cuisines: [
        "Navratri Special",
        "Thalis",
        "Chinese",
        "Continental",
        "Snacks",
        "Punjabi",
      ],
      avgRating: 4.6,
      parentId: "7093",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 9.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-06 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dmb-doodh-misthan-bhandar-golpark-bani-park-jaipur-57722",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "222081",
      name: "Bombay Misthan Bhandar",
      cloudinaryImageId: "127d6d2a1a4f3e995fba2c5dd93b574f",
      locality: "Amrapali Marg",
      areaName: "Vaishali Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "Rajasthani",
        "Snacks",
        "Sweets",
        "Indian",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "387367",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 7.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-06 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bombay-misthan-bhandar-amrapali-marg-vaishali-nagar-jaipur-222081",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45810",
      name: "Falahaar & Kota Kachori",
      cloudinaryImageId: "3198495edc9215c39d001593cb9d6b10",
      locality: "Queens Road",
      areaName: "Vaishali Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "7019",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 10.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "10.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-06 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/falahaar-and-kota-kachori-queens-road-vaishali-nagar-jaipur-45810",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "90186",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Amrapali Marg",
      areaName: "Vaishali Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-amrapali-marg-vaishali-nagar-jaipur-90186",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "402635",
      name: "Starbucks Coffee",
      cloudinaryImageId: "2418209798927d733a50f5d2ebcc2aee",
      locality: "SP Marg",
      areaName: "C Scheme",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.4,
      parentId: "195515",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 11.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-06 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-sp-marg-c-scheme-jaipur-402635",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "327471",
      name: "Vadilal Ice Creams",
      cloudinaryImageId: "edf6aa61ed4cdfcda130897c5b3e5255",
      locality: "Vidyadhar Nagar",
      areaName: "Vidhyadhar Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "11745",
      avgRatingString: "4.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 8.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "8.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-06 18:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/vadilal-ice-creams-vidyadhar-nagar-vidhyadhar-nagar-jaipur-327471",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "143098",
      name: "Rominus Pizza and Burger",
      cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
      locality: "Vaishali Nagar",
      areaName: "JDA Market, Vaishali Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Pizzas",
        "American",
        "Barbecue",
        "Italian-American",
        "Snacks",
        "Grill",
        "Italian",
        "Pastas",
        "Sweets",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "8387",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-07 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rominus-pizza-and-burger-vaishali-nagar-jda-market-vaishali-nagar-jaipur-143098",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "44504",
      name: "Tan-Sukh By Kanha",
      cloudinaryImageId: "764ed3d5745ede9a507ad38afc80a543",
      locality: "Nityanand Nagar",
      areaName: "Vaishali Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Continental",
        "Desserts",
        "Beverages",
        "American",
        "Pizzas",
        "Snacks",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "231081",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 10.5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "10.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-06 22:40:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/tan-sukh-by-kanha-nityanand-nagar-vaishali-nagar-jaipur-44504",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "281882",
      name: "ITC Rajputana - Flavours",
      cloudinaryImageId: "919cb3be0e7406f86f6741ebe7c30128",
      locality: "Gopalbari",
      areaName: "Gopalbari",
      costForTwo: "₹1000 for two",
      cuisines: [
        "Indian",
        "European",
        "Asian",
        "Continental",
        "Biryani",
        "North Indian",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "353820",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 62,
        lastMileTravel: 10.3,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "10.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-06 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/itc-rajputana-flavours-gopalbari-jaipur-281882",
      type: "WEBLINK",
    },
  },
];

const Navbar = () => {
    return (
        <div className="navbar">
            <img alt="website-logo" src={logo}/>
            <div className="nav-links">
                <ul>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contactus">Cart</a></li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = ({restaurant}) => {
    return(
        <div className="restaurantCard">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + restaurant.cloudinaryImageId}/>
            <div className="restaurantDesc">
                <h3 style={{fontSize: "14px"}}>{restaurant.name}</h3>
                <p>{restaurant.avgRating}</p>
                <h6>{restaurant.cuisines.join(", ")}</h6>
            </div>
        </div>
    )
};

const Body = () => {
    return (
        <div className="restaurantList">
            {restaurants.map((restaurant) => {
                return <RestaurantCard restaurant={restaurant.info} key={restaurant.info.id}></RestaurantCard>
            })}
        </div>
    )
};

const Footer = () => {
    return (
        <h1>Footer</h1>
    )
};

const AppLayout = () => {
    return (
        <>
        <Navbar />
        <Body />
        <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);