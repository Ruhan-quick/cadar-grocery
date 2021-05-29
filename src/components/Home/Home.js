import React from 'react';
import Navbar from './Navbar';
import GroceryItems from "./GroceryItems/GroceryItems";
const Home = () => {
    return (
        <div>
            <Navbar/>
            <GroceryItems></GroceryItems>
        </div>
    );

};

export default Home;
