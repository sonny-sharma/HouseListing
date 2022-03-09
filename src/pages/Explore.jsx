import React from "react";
import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import HomeSlider from "./../components/HomeSlider";

const Explore = () => {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        <HomeSlider />

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='RentImage'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Place for Rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='SellImage'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Place for Sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
