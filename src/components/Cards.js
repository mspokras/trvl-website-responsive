import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import waterfall from '../images/img-9.jpg';
import islands from '../images/img-2.jpg';
import sailing from '../images/img-3.jpg';
import football from '../images/img-4.jpg';
import sahara from '../images/img-8.jpg';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={waterfall}
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src={islands}
                            text='Travel through the islands of Bali in a private cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={sailing}
                            text='Set sail in the Atlantic Ocean visiting uncharted waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem 
                            src={football}
                            text='Experience football on top of the Himalayan Mountains'
                            label='Sports'
                            path='/services'
                        />
                        <CardItem 
                            src={sahara}
                            text='Ride through the Sahara desert on a guided camel tour'
                            label='Adrenaline'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;