//Development Component
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/LanguageContext'; 

//Route Component
import Home from '../pages/Home';
import Beverage from '../pages/Beverages'; 
import Food from '../pages/Food';
import House from '../pages/Household';
import Details from '../pages/Details';
import Policy from '../pages/Policy';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage'; 
import ProductDetail from '../pages/Details';


function AppRouter() {
	return (
		<> 
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/beverages" element={<Beverage />} />
					<Route path="/food" element={<Food />} />
					<Route path="/household" element={<House />} />
					<Route path="/policy" element={<Policy/>} />
					<Route path="/contact" element={<Contact/>} />
					<Route path="*" element={<NotFoundPage />} />
					
					<Route path="/details/:id" element={<ProductDetail />} /> {/* Product detail route */}
					</Routes>
			</BrowserRouter>
		</ThemeProvider>
		</>
	)
}
export default AppRouter;