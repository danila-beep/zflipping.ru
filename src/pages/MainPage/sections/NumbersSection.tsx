import { globalImages } from "assets/globalImages/assetsReady";
import { Button } from "customStyles/customStyles";
import React from "react";
import styled from "styled-components";

const NumbersSection = () => {
    return (
        <NumbersSectionWrapper id="numbers">
            <NumbersContent>
                <h1>Мы в цифрах</h1>
                <p>
                    Мы имеем большой опыт в управлении проектам и это позволило нам быстро начать зарабатывать
                    по модели флиппинга.
                </p>
            </NumbersContent>
            <NumbersCardsGrid>
                <li>
                    <img src={globalImages.numbersImage1} alt="" />
                    <div>
                        <h4>20+</h4>
                        <p>Реализованных объектов</p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.numbersImage2} alt="" />
                    <div>
                        <h4>98 дней</h4>
                        <p>Среднее время реализации проекта</p>
                    </div>
                </li>

                <li>
                    <img src={globalImages.numbersImage3} alt="" />
                    <div>
                        <h4>20 лет</h4>
                        <p>Опыт в сфере управления строительными объектами.</p>
                    </div>
                </li>
            </NumbersCardsGrid>
        </NumbersSectionWrapper>
    );
};

const NumbersCardsGrid = styled.ul`
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    list-style: none;

    & > li {
        padding: 1rem 2rem;
        background: white;
        box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
        display: flex;
        align-items: center;
        gap: 2rem;
        width: 30rem;
        border-radius: 1rem;
        transition: 0.3s ease;

        &:hover {
            transform: translateY(-5%);
        }

        @media (max-width: 1280px) {
            flex-direction: column;
            width: 20rem;
            text-align: center;
            height: 20rem;
        }
        @media (max-width: 1280px) {
            height: 22rem;
        }
        @media (max-width: 950px) {
            width: 100%;
            flex-direction: row;
            text-align: start;
            height: auto;
        }

        & > div {
            & > h4 {
                color: var(--main-color);
                font-size: 3rem;
            }
            & > p {
                font-size: 1.1rem;
            }
        }

        & > img {
            height: 10rem;
            border-radius: 50%;
        }
    }
    & > li:nth-child(2) {
        margin-left: -5rem;
        @media (max-width: 1280px) {
            margin: 0;
        }
    }

    @media (max-width: 1280px) {
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }
    @media (max-width: 950px) {
        flex-direction: column;
        align-items: center;
    }
`;

const NumbersContent = styled.div`
    width: 50%;
    & h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 5rem;
        @media (max-width: 980px) {
            text-align: left;
        }
    }
    & p {
        font-weight: 300;
        font-size: 1.3rem;
        @media (max-width: 980px) {
            text-align: left;
        }
    }

    @media (max-width: 1280px) {
        width: 80%;
        text-align: center;
    }

    @media (max-width: 950px) {
        width: 80%;
        text-align: center;
    }
`;

export const NumbersSectionWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 20%;
    padding-right: 20%;
    gap: 10rem;
    padding-top: 10rem;
    @media (max-width: 980px) {
        align-items: flex-start;
    }

    @media (max-width: 1440px) {
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 10rem;
    }
    @media (max-width: 1280px) {
        flex-direction: column;
        gap: 5rem;
    }

    @media (max-width: 950px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export default NumbersSection;
