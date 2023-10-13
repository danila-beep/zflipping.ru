import React from "react";
import HeroSection from "./sections/HeroSection";
import styled from "styled-components";
import GetStartedSection from "./sections/GetStartedSection";
import AdvantagesSection from "./sections/AdvantagesSection";
import NumbersSection from "./sections/NumbersSection";
import Footer from "components/Footer";
import PropertiesSection from "./sections/PropertiesSection";
import SloganSection from "./sections/SloganSection";
import Header from "components/Header";
import OfferSection from "./sections/OfferSection";
import FAQSection from "./sections/FAQSection";
import WelcomeSection from "./sections/WelcomeSection";

const MainPage = () => {
    return (
        <PageWrapper>
            <Header scrollListener={true} />
            <HeroSection />
            <WelcomeSection />
            <OfferSection />
            <GetStartedSection />
            <AdvantagesSection />
            <NumbersSection />
            <PropertiesSection />
            <FAQSection />
            <SloganSection />
            <Footer />
        </PageWrapper>
    );
};

const PageWrapper = styled.main`
    overflow-x: hidden;
`;

export default MainPage;
