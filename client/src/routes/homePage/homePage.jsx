import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import React from 'react'

export const HomePage = () => {
  return (
    <div  className="homePage">
    <div className="textContainer">
        <div className="wrapper">
        <h1 className="title">Find Real Estate & Get Your Dream Place</h1> 
        <p className="description">Explore a wide range of properties and find your perfect home with ease. Whether you're looking to buy, sell, or rent, we provide the best options tailored to your needs.</p>
        <SearchBar />
        <div className="boxes">
            <div className="box">
                <h1>02+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>16</h1>
                <h2>Awards Gained</h2>
            </div>
            <div className="box">
                <h1>1000+</h1>
                <h2>Property Ready</h2>
            </div>
        </div>
        </div>
    </div>
    <div className="imgContainer">
        <img src="./bg.png" alt="" />
    </div>
    </div>
  )
}
export default HomePage