import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-indigo-300 m-3 p-3 rounded-md'>
            <div>
                <h3><span className='text-6xl font-bold text-white'>{option.Price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                </h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
           <button className='bg-blue-700 mt-4 rounded-md w-full py-2 text-white font-bold '>Buy Now</button>

        </div>
    );
};

export default PriceOption;