//Development Component
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/LanguageContext'; 

//Route Component
import Home from '../pages/Home';
import Beverage from '../pages/Beverages'; 
import Food from '../pages/Food';
import House from '../pages/Household';

function AppRouter() {
	return (
		<> 
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/beverage" element={<Beverage />} />
					<Route path="/food" element={<Food />} />
					<Route path="/household" element={<House />} />
					{/* <Route path="/policy" element={<Food />} />
					<Route path="/contact" element={<House />} /> */}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
		</>
	)
}
export default AppRouter;