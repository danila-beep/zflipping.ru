import { globalImages } from "assets/globalImages/assetsReady";
import { OvalPattern } from "assets/patterns/patterns";
import { AccentSpan, SectionWrapper } from "customStyles/customStyles";
import React from "react";
import styled from "styled-components";

const HeroSection = () => {
    return (
        <SectionWrapper style={{ minHeight: "80vh" }}>
            <HeroContent>
                <h3>ZFLIPPING.RU</h3>
                <h1>Заработок на недвижимости</h1>
                <p>
                    со сроком сделки от <AccentSpan>3-6 месяцев</AccentSpan> и фиксированной ставкой{" "}
                    <AccentSpan>40% годовых</AccentSpan>
                </p>
            </HeroContent>
            <HeroImage src={globalImages.heroImage} alt="" />
            <OvalPattern style={{ top: "50%", left: "50%" }} />
            <OvalPattern style={{ top: "50%", left: "20%", background: "rgba(217, 60, 200, .6)" }} />
        </SectionWrapper>
    );
};

const HeroContent = styled.div`
    width: 35rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: -40%;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: radial-gradient(circle, #d9eafb 0%, rgba(255, 255, 255, 1) 100%);
        border-radius: 50%;
        filter: blur(10rem);
        z-index: -1;
        width: 200%;
        height: 200%;
    }

    & h3 {
        color: var(--main-color);
        font-weight: 700;
        font-size: 1.5rem;
    }
    & h1 {
        width: 100%;
        font-size: 5rem;
        font-weight: 700;
        line-height: 5.5rem;
        margin-bottom: 0.5rem;
        @media (max-width: 670px) {
            font-size: 4rem;
        }
        @media (max-width: 470px) {
            font-size: 3rem;
            line-height: 3.5rem;
        }
    }
    & p {
        font-size: 1.7rem;
        font-weight: 300;
    }
    & div {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;

        @media (max-width: 950px) {
            justify-content: center;
        }
    }

    @media (max-width: 950px) {
        width: 80%;
        text-align: center;
    }
`;

const HeroImage = styled.img`
    position: absolute;
    width: 50%;
    bottom: 0;
    right: 0;
    z-index: -1;

    @media (max-width: 1112px) {
    }

    @media (max-width: 950px) {
        display: none;
    }
`;

export default HeroSection;
