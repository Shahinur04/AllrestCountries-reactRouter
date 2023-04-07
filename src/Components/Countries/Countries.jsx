import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries=useLoaderData();
    // console.log(countries)
    return (
        <div>
            <h1>Let's see all rest countries: {countries.length}</h1>
            <div>
                {
                    countries.map(country=><li>Country:{country.name.common}<Link to={country.cca3}>Country</Link></li>)
                }
            </div>
        </div>
    );
};

export default Countries;