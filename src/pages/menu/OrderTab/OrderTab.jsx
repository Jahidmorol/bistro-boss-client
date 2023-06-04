import React from 'react';
import FoodCard from '../../../component/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[85%] mx-auto my-10'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;