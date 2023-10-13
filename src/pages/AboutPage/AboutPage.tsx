import { globalImages } from "assets/globalImages/assetsReady";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import styled from "styled-components";

const AboutPage = () => {
    return (
        <AboutPageWrapper>
            <Header />
            <AboutHeading>
                <img src={globalImages.aboutImage} alt="" />
                <h1>О компании</h1>
            </AboutHeading>
            {/* <Footer /> */}
        </AboutPageWrapper>
    );
};

const AboutHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    & > h1 {
        margin-top: 18%;
        background: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        font-size: 2.5rem;
        font-weight: 700;
        box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);

    }
    & > img {
        user-select: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
    }
    @media (max-width: 950px) {
        flex-direction: column-reverse;
        padding-top: 15%;
        gap: 5rem;
        & > img {
            position: relative;
            width: 90%;
            border-radius: 1rem;
        }
    }
`;

const AboutPageWrapper = styled.main`
    position: relative;
    min-height: 100vh;
`;

export default AboutPage;
