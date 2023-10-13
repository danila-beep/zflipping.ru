import { globalImages } from "assets/globalImages/assetsReady";
import { AccentSpan, FlareButton, SectionWrapper } from "customStyles/customStyles";
import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import styled from "styled-components";

const SloganSection = () => {
    return (
        <SloganSectionWrapper id="join">
            <GoodByeImage src={globalImages.sloganImage} alt="" />
            <SloganContent>
                <h1>
                    Вы инвестируете, <br />
                    Остальное мы сделаем за вас!
                </h1>
                <FlareButton>
                    Реализованные обьекты <FaArrowAltCircleDown />
                </FlareButton>
            </SloganContent>
        </SloganSectionWrapper>
    );
};

const GoodByeImage = styled.img`
    width: 60%;
    margin-left: -10rem;

    @media (max-width: 950px) {
        margin: 0;
    }
`;

const SloganContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 40%;

    @media (max-width: 950px) {
        width: 80%;
        align-items: center;
        text-align: center;
    }

    & > h2 {
        font-size: 1.5rem;
    }
    & > h1 {
        font-size: 3rem;
    }
    & > p {
        font-size: 1.2rem;
        font-weight: 300;
    }

    & > button {
        margin-top: 1rem;
        width: fit-content;
        display: flex;
        align-items: center;
        & > svg {
            margin-left: 1rem;
        }
    }
`;

export const SloganSectionWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 0 10%;
    gap: 5rem;
    padding-top: 10rem;

    @media (max-width: 1440px) {
        padding: 10rem 3%;
    }

    @media (max-width: 950px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export default SloganSection;
