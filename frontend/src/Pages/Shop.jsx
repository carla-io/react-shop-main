import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers'

const Shop = () => {
    return(
        <div>
            <Hero/>
            <Popular/>
            <div>
                <br/>
                
                <Offers/>
            </div>
        </div>

        
    )
}

export default Shop