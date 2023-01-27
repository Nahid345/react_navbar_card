import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', Price: 0, features:[
            'Everything Free Feature',
            'Extra Feature',
            'unnecessary Feature',
            'will never use',
            'Ajaira feature',
            'Hudai feature'
        ] },
        { id: 1, name: 'Medium', Price: 9.999,features:[
            'Everything Medium Feature',
            'Extra Feature',
            'unnecessary Feature',
            'will never use',
            'Ajaira feature',
            'Hudai feature'
    ]},
        { id: 1, name: 'Premium', Price: 19.9,features:[
            'Everything Premium Feature',
            'Extra Feature',
            'unnecessary Feature',
            'will never use',
            'Ajaira feature',
            'Hudai feature' ]}
    ]
    return (
        <div>
            <h2 className='text-6xl font-bold mt-5 bg-indigo-300 p-12 text-white'> Best Deal of  the Town</h2>
          <div className='grid md:grid-cols-3 gap-3'>
          {
               pricingOptions.map(option=><PriceOption 
               key ={option.id}
               option={option}
               ></PriceOption>)
            }
          </div>
        </div>
    );
};

export default Pricing;