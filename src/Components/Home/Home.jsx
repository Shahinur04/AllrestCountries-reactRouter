import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h3>All Coming Home</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;