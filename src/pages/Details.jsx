import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext';
import Navigation from '../components/Navigation';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  console.log("Product ID from URL:", id); // Check the retrieved ID

  const { language } = useContext(LanguageContext);
  const productText = productData[language] || {};
  
  // Find the specific product by id
  const product = productText.Beverage.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navigation />
      <div className="product-detail-page max-w-5xl mx-auto">
        <h1 className="text-4xl mt-24">{product.BeverageName}</h1>
        <img src={product.image} alt={product.Heading} className="w-250px h-auto" />

        <h2 className="text-2xl">{product.SubHeading}</h2>
        <p>{product.description}</p>
        <button className="bg-orange-500 p-2 mt-4 text-white">Price Quote</button>
      </div>
    </div>
  );
};

export default ProductDetail;
