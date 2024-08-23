//Development Component
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/LanguageContext'; 

//Route Component
import Home from '../pages/Home';

function AppRouter() {
	return (
		<>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
		</>
	)
}
export default AppRouter;