import React, { useContext } from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';

const CategoryCard = ({ CategoryImage, Category, ComingSoon, pagelink }) => {
    const { language } = useContext(LanguageContext);
    const translationText = translationData[language]
    

    return (
        <div className='shadow-md flex flex-col gap-4 min-w-[240px] shadow-xl p-4 '>
            <div className='w-[260px] h-[240px] relative transform transition duration-300 ease-in-out hover:scale-105' style={{ backgroundImage: `url(${CategoryImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {ComingSoon && <div className='absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center'>
                    <h1 className='text-white text-center text-lg'>{translationText.comingSoon}</h1>
                </div>}
            </div>

            <Link to={pagelink}>
                <span className='bg-[#578440] justify-center py-2 text-white flex items-center gap-2 hover:underline cursor-pointer decoration-2'>
                    <h3 className='text-xl font-[500]'>{Category}</h3>
                    <FaAnglesRight className='text-lg' />
                </span>
            </Link>
        </div>
    );
}

export default CategoryCard;
