import React from "react";
import "./App.css";
import Header from "components/Header";
import MainPage from "pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "pages/ContactPage/ContactPage";
import AboutPage from "pages/AboutPage/AboutPage";
import PropertiesPage from "pages/PropertiesPage/PropertiesPage";
import PropertyPageRework from "pages/PropertyPage/PropertyPageRework";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/zflipping.ru" element={<MainPage />} />
                <Route path="/zflipping.ru/property" element={<PropertiesPage />} />
                <Route path="/zflipping.ru/about" element={<AboutPage />} />
                <Route
                    path="/zflipping.ru/contactUs"
                    element={<ContactPage />}
                />
                <Route
                    path="/zflipping.ru/property/:id"
                    element={<PropertyPageRework />}
                />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
