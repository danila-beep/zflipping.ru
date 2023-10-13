import { globalImages } from "assets/globalImages/assetsReady";
import { SectionWrapper } from "customStyles/customStyles";
import React from "react";
import styled from "styled-components";

const AdvantagesSection = () => {
    return (
        <SectionWrapper
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10rem",
            }}
            id="whyUs"
        >
            <AdvantagesContent>
                <h1>Почему выбирают нас?</h1>
            </AdvantagesContent>
            <AdvantagesCardsGrid>
                <li>
                    <img src={globalImages.advantageImage1} alt="" />
                    <div>
                        <h4>Высокая гарантированная доходность</h4>
                        <p>От 40% годовых в недвижимости при минимальном вложении времени и сил</p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.advantageImage2} alt="" />
                    <div>
                        <h4>Низкие риски</h4>
                        <p>
                            Все объекты недвижимости регистрируются на инвестора, что минимизирует потерю
                            вложений
                        </p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.advantageImage3} alt="" />
                    <div>
                        <h4>Прозрачность на всех этапах</h4>
                        <p>
                            Мы заранее рассчитываем ориентировочные расходы и прибыль. <br />
                            Открытость на всех этапах реализации проекта с онлайн отчетностью
                        </p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.advantageImage4} alt="" />
                    <div>
                        <h4>Экспертная команда</h4>
                        <p>
                            Разработан скоринг объектов по более чем 150 пунктам <br />
                            Юридическая проверка всех объектов <br /> Собственный штат по всему циклу ремонта
                            и меблировки
                        </p>
                    </div>
                </li>
            </AdvantagesCardsGrid>
        </SectionWrapper>
    );
};

const AdvantagesCardsGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    list-style: none;
    margin-top: 3rem;
    padding: 0;

    @media (max-width: 980px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
        width: 100%;
    }

    & li {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1rem 1rem;
        border-radius: 1rem;
        box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
        background: white;
        transition: 0.3s ease;

        &:hover {
            transform: translateY(-5%);
        }

        & img {
            border-radius: 50%;
        }
        & div {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            & h4 {
                font-size: 1.5rem;
                font-weight: 700;
            }
        }
    }
`;

const AdvantagesContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
        width: 60%;
    }
`;

export default AdvantagesSection;
