//Development Component
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/LanguageContext'; 

//Route Component
import Home from '../pages/Home';
import Beverages from '../pages/Beverages'; 
import Snacks from '../pages/Snacks';
import House from '../pages/Household';
import BeverageDetails from '../pages/BeveragesDetail';
import FoodDetails from '../pages/FoodDetail';
import HouseholdDetails from '../pages/HouseholdDetail';
import Policy from '../pages/Policy';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage'; 
import GetQuote from '../pages/Getquote';

function AppRouter() {
	return (
		<> 
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/Beverages" element={<Beverages />} />
					<Route path="/Snacks" element={<Snacks />} />
					<Route path="/Household" element={<House />} />
					<Route path="/Policy" element={<Policy/>} />
					<Route path="/Contact" element={<Contact/>} />
					<Route path="/Beverages/details/:id" element={<BeverageDetails />} />
					<Route path="/Snacks/details/:id" element={<FoodDetails />} />
					<Route path="/Household/details/:id" element={<HouseholdDetails />} />
					<Route path="*" element={<NotFoundPage />} />
					<Route path="/Getquote" element={<GetQuote />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
		</>
	)
}
export default AppRouter;