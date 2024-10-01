import React, { useContext } from 'react';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { language } = useContext(LanguageContext); 
    const translationText = translationData[language] || translationData['mn'];
    const location = useLocation(); // Get the current path

    const currentPath = location.pathname.split('/')[1]; 

    const handleClick = () => {
        window.location.href = `/${currentPath}/details/${product.id}`;
    };

    return (
        <div className='w-[280px] bg-white px-4 py-6 shadow-md text-left flex flex-col'>
            <img className='w-full h-[300px] object-cover' src={product.image} alt={product.Heading} />
            <h3 className='text-xl font-[500] mt-6 mb-2 text-center'>{product.Heading}</h3>
            <p className='text-sm text-[#888] '>{product.SubHeading}</p>
            <div className='self-center mt-4'>
                <button 
                    className='bg-orange-500 text-white px-6 py-3 mt-2' 
                    onClick={handleClick}
                >
                    {translationText.detailButton}
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
