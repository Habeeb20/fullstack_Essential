import React from 'react'
import Explore from '../components/explore/Explore';
import InspectedRoom from "../components/inspectedRoom/InspectedRoom";
import Offers from "../components/offers/Offers";
import TrandingDestination from '../components/trandingDestination/trandingDestination';
// import TrandingDestination from '../components/trandingDestination/TrandingDestination';
import DiscoverCity from "../components/discover/DiscoverCity";
import HotelCategories from "../components/hotelCategories/HotelCategories";
import Hotels from "../components/hotels/Hotels";
import HotelDeals from "../components/hotelDeals/HotelDeals";
import Footer from "../components/footer/Footer";
import BookingForm from '../components/bookingForm/BookinForm';

const Home1 = () => {
  return (
    <div>
      <BookingForm />
       <Offers />
      <HotelDeals />
      <Hotels />
      <HotelCategories />
      <TrandingDestination />
      <Explore />
      <InspectedRoom />
      <DiscoverCity />
      <Footer />
    </div>
  )
}

export default Home1
