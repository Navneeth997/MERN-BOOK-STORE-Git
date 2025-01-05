import React from 'react'
import Banner from '../BannerCard/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavouriteBook from './FavouriteBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'
import MyFooter from './MyFooter'


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavouriteBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Reviews/>
      <MyFooter/>
    </div>
    
  )
}

export default Home
