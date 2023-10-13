import { globalImages } from "assets/globalImages/assetsReady";
import { AccentSpan } from "customStyles/customStyles";
import React from "react";
import styled from "styled-components";

const OfferSection = () => {
    return (
        <OfferSectionWrapper id="offer">
            <h1>Что мы предлагаем?</h1>
            <h2>
                Мы предлагаем вам присоединиться к нам, совместно инвестируя в один их наших очередных
                проектов
            </h2>
            <OfferList>
                <li>
                    <img src={globalImages.offerImage1} alt="" width={100} />
                    <div>
                        <h4>
                            <AccentSpan>Высокая прибыль</AccentSpan> от 30% до 120% годовых.
                        </h4>
                        <p>
                            Инвестирование в флиппинг недвижимости открывает потенциал для получения годовой
                            прибыли в диапазоне от 30% до 120%. Это достигается благодаря быстрому увеличению
                            стоимости недвижимости после проведения реновации. Продажа улучшенной недвижимости
                            приносит существенную прибыль.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.offerImage2} alt="" width={100} />
                    <div>
                        <h4>
                            <AccentSpan>Гарантированный актив</AccentSpan>: Недвижимость - надежный реальный
                            актив.
                        </h4>
                        <p>
                            Недвижимость всегда обладает фундаментальной стоимостью, что предотвращает потери
                            в периоды негативных изменений на рынке. Вложения в недвижимость остаются
                            надежными и безопасными.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.offerImage3} alt="" width={100} />
                    <div>
                        <h4>
                            Создание добавленной стоимости: <AccentSpan>Рост стоимости на 10-30% </AccentSpan>
                            благодаря ремонту.
                        </h4>
                        <p>
                            Мы не просто ожидаем роста цен, мы гарантируем его, создавая дополнительную
                            стоимость от 10% до 30% через качественный ремонт. Мы преображаем недвижимость,
                            превращая убывающие объекты в источники прибыли.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.offerImage4} alt="" width={100} />
                    <div>
                        <h4>
                            <AccentSpan>Увеличение прибыли без участия в управлении</AccentSpan>: 8 часов от
                            инвестора.
                        </h4>
                        <p>
                            Наши инвесторы получают прибыль, не затрачивая много времени на управление и
                            реновацию объектов. В среднем, для полного цикла сделки от покупки до продажи
                            требуется всего 8 часов вашего времени.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.offerImage5} alt="" width={100} />
                    <div>
                        <h4>
                            Контроль над инвестициями: <AccentSpan>Полный контроль и прозрачность</AccentSpan>
                            .
                        </h4>
                        <p>
                            Вы имеете полный контроль над выбором проектов и стратегией. Мы предоставляем
                            расширенный прогноз перед каждой сделкой, объясняя выбор объекта, план вложений и
                            ожидаемую прибыль с точностью до 6%.
                        </p>
                    </div>
                </li>
                <li>
                    <img src={globalImages.offerImage6} alt="" width={100} />
                    <div>
                        <h4>
                            <AccentSpan>Быстрый оборот средств</AccentSpan>: Среднее время реализации от 3 до
                            6 месяцев.
                        </h4>
                        <p>
                            Благодаря слаженной работе команды и четко структурированным действиям всех
                            участников сделки, проекты флиппинга недвижимости реализуются в среднем за 3-6
                            месяцев. Это позволяет быстро оборачивать средства и получать прибыль.
                        </p>
                    </div>
                </li>
            </OfferList>
        </OfferSectionWrapper>
    );
};

const OfferList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 3rem;
    gap: 2rem;

    & > li {
        text-align: left;
        display: flex;
        gap: 2rem;
        padding: 2rem;
        box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
        border-radius: 1rem;
        align-items: center;
        transition: 0.3s ease;
        @media (max-width: 450px) {
            flex-direction: column;
        }

        &:hover {
            transform: translateY(-5%);
        }
        & > img {
            width: 100px;
            height: auto;
            @media (max-width: 700px) {
                width: 30% !important;
            }
            @media (max-width: 450px) {
                width: 50% !important;
            }
        }
        & > div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            & > h4 {
                font-size: 1.3rem;
                font-weight: 700;
            }
        }
    }
`;

const OfferSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-right: 20%;
    padding-left: 20%;
    text-align: center;
    padding-top: 10rem;

    & > h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        @media (max-width: 980px) {
            text-align: left;
        }
    }
    & > h2 {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
        @media (max-width: 980px) {
            text-align: left;
        }
    }
    @media (max-width: 1440px) {
        padding-right: 3%;
        padding-left: 3%;
    }
`;

export default OfferSection;
