//Development Component
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/LanguageContext'; 

//Route Component
import Home from '../pages/Home';
import Beverage from '../pages/Beverages'; 
import Snacks from '../pages/Snacks';
import House from '../pages/Household';
import BeverageDetails from '../pages/BeveragesDetail';
import FoodDetails from '../pages/FoodDetail';
import HouseholdDetails from '../pages/HouseholdDetail';
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
					<Route path="/Beverage" element={<Beverage />} />
					<Route path="/Food" element={<Snacks />} />
					<Route path="/Household" element={<House />} />
					<Route path="/policy" element={<Policy/>} />
					<Route path="/contact" element={<Contact/>} />
					<Route path="/Beverage/details/:id" element={<BeverageDetails />} />
					<Route path="/Food/details/:id" element={<FoodDetails />} />
					<Route path="/Household/details/:id" element={<HouseholdDetails />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
		</>
	)
}
export default AppRouter;