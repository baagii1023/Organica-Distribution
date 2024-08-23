import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const LanguageToggle = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
			<div className="border-2 border-black rounded-lg overflow-hidden flex">
			<button
					className={`${
							language === 'zh' ? 'bg-white text-black' : 'bg-black text-white'
					} px-2 py-1 font-semibold focus:outline-none`}
					onClick={() => toggleLanguage('en')}
			>
					EN
			</button>
			<button
					className={`${
							language === 'en' ? 'bg-white text-black' : 'bg-black text-white'
					} px-2 py-1 font-semibold focus:outline-none`}
					onClick={() => toggleLanguage('zh')}
			>
					MN
			</button>
	</div>
    );
};

export default LanguageToggle;