import { globalImages } from "assets/globalImages/assetsReady";
import { SectionWrapper } from "customStyles/customStyles";
import React from "react";
import styled from "styled-components";

const GetStartedSection = () => {
    return (
        <SectionWrapper
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10rem",
            }}
            id="howItWorks"
        >
            <GetStartedContent>
                <h1>Процесс взаимодействия</h1>
                <p>
                    За время работы мы выработали и автоматизировали максимально количество процессов, что бы
                    инвесторам было комфортно работать с нами.
                </p>
            </GetStartedContent>
            <StepsContainer>
                <ul>
                    <li>
                        <img src={globalImages.getStartedImage1} alt="" />
                        <div>
                            <h1>Приобретения объекта</h1>
                            <p>
                                Одобрения ипотеки <br /> Поиск и одобрение объекта <br /> Сделка по покупке
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src={globalImages.getStartedImage2} alt="" />
                        <div>
                            <h1>Ремонт и подготовка к продаже</h1>
                            <p>
                                Ремонтные работы <br /> Меблировка объекта <br /> Подготовка к продаже
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src={globalImages.getStartedImage3} alt="" />
                        <div>
                            <h1>Подведение итогов</h1>
                            <p>
                                Расчет прибыли инвестора <br /> Расчет и уплата налогов
                            </p>
                        </div>
                    </li>
                </ul>
            </StepsContainer>
        </SectionWrapper>
    );
};

const StepsContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 1280px) {
        flex-direction: column;
        width: 80%;
    }
    & ul {
        display: flex;
        list-style: none;
        gap: 5rem;
        padding: 0;
        margin-top: 2rem;

        @media (max-width: 1280px) {
            flex-direction: column;
            width: 100%;
            align-items: center;
        }

        & li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem 1rem;
            box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
            border-radius: 1rem;
            width: 30rem;
            transition: 0.3s ease;

            &:hover {
                transform: translateY(-5%);
            }

            @media (max-width: 1440px) {
                width: 25rem;
            }
            @media (max-width: 1280px) {
                width: 125%;
                flex-direction: row;
                gap: 3rem;
                text-align: start;
                justify-content: space-between;
            }

            & img {
                height: 15rem;
                margin-bottom: 2rem;

                @media (max-width: 1280px) {
                    width: 40%;
                    height: 100%;
                }
            }
            & > div {
                @media (max-width: 1280px) {
                    width: 60%;
                }
                & > h1 {
                    margin-bottom: 1rem;
                }
            }
        }
    }
`;

const GetStartedContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    @media (max-width: 980px) {
        align-items: flex-start;
    }

    & h3 {
        color: var(--main-color);
        font-weight: 700;
        font-size: 1.3rem;
        text-align: center;
    }
    & h1 {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        @media (max-width: 980px) {
            text-align: left;
        }
    }
    & p {
        font-size: 1.3rem;
        font-weight: 300;
        text-align: center;
        @media (max-width: 980px) {
            text-align: left;
        }
    }
`;

export default GetStartedSection;
