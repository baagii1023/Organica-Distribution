import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className='w-[280px] bg-white px-4 py-6 shadow-md text-left flex flex-col'>
            <img className='w-full h-[200px] object-cover' src={product.image} alt={product.Heading} />
            <h3 className='text-xl font-[500] mt-6 mb-2'>{product.Heading}</h3>
            <p className='text-sm text-[#888] truncate'>{product.SubHeading}</p>
            <div className='self-center mt-4'>
                <Link to={`/details/${product.Heading}`}>
                    <button className='bg-orange-500 text-white px-6 py-3 mt-2'>View Details</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
