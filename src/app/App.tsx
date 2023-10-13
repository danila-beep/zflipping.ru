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
                <Route path="/" element={<MainPage />} />
                <Route path="/property" element={<PropertiesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                    path="/contactUs"
                    element={<ContactPage />}
                />
                <Route
                    path="/property/:id"
                    element={<PropertyPageRework />}
                />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
