import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <h4 className='text-yellow-600 mb-2'>---{subTitle}---</h4>
            <h2 className='text-3xl uppercase border-y-4 py-4'>{title}</h2>
        </div>
    );
};

export default SectionTitle;