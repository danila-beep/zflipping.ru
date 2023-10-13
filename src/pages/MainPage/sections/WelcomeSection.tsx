import { globalImages } from "assets/globalImages/assetsReady";
import { AccentSpan } from "customStyles/customStyles";
import React from "react";
import styled from "styled-components";

const WelcomeSection = () => {
    return (
        <WelcomeSectionWrapper id="hello">
            <WelcomeImage src={globalImages.welcomePhoto} />
            <WelcomeContent>
                <h3>
                    <AccentSpan>Добро пожаловать в увлекательный мир инвестиций в недвижимость!</AccentSpan>
                </h3>
                <h1>
                    Меня зовут Александр Забелин, и с удовольствием расскажу вам о нашей философии и подходе к
                    флиппингу недвижимости.
                </h1>
                <p>
                    Свыше двадцати лет опыта в сфере строительства и управления проектами привнесли в нашу
                    команду уникальное понимание того, как создавать и преобразовывать недвижимость.{" "}
                    <AccentSpan>С 2022 года мы с радостью реализуем успешные проекты по флиппингу</AccentSpan>
                    , делая это с энтузиазмом и профессионализмом.
                </p>
                <p>
                    Для нас инвесторы - не просто партнеры, а наши друзья в каждом проекте.{" "}
                    <AccentSpan>Важнейшее для нас - это доверие</AccentSpan>, которое они нам оказывают. Мы
                    всегда стремимся гарантировать наилучшие результаты для них. Мы не ограничиваемся поиском
                    недооцененных объектов, мы создаем дополнительную стоимость через тщательно разработанные
                    проекты ремонта, подогнанные под конкретные объекты и районы.
                </p>
                <p>
                    Мы гордимся нашей компанией, которая выделяется среди других своим профессионализмом и
                    честностью. У нас не бывает отрицательных сделок.{" "}
                    <AccentSpan>
                        Мы убеждены, что каждый проект должен приносить пользу всем его участникам.
                    </AccentSpan>{" "}
                    Это и есть наша главная задача - создавать взаимовыгодные сделки, где все выигрывают.
                </p>
                <p>
                    Всегда высокий уровень сервиса был нашей визитной карточкой во всех наших проектах. Мы
                    верим, что комфорт и удовлетворение клиентов - это залог успешных инвестиций.{" "}
                    <AccentSpan>Мы придаем огромное значение планированию и прогнозированию</AccentSpan>,
                    чтобы все прошло максимально гладко и без сюрпризов.
                </p>
                <p>Если вы ищете партнера, который разделяет ваши цели и ценности, вы нашли его.</p>
                <p>
                    <AccentSpan>
                        С уважением,
                        <br /> Александр Забелин
                    </AccentSpan>
                </p>
            </WelcomeContent>
        </WelcomeSectionWrapper>
    );
};

const WelcomeContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > h3 {
        font-size: 1.3rem;
    }
    & > h1 {
        font-size: 1.8rem;
    }
    & > p {
        font-size: 1.2rem;
    }
    & > p:last-child {
        font-size: 1.1rem;
        font-weight: 700;
    }
`;

const WelcomeImage = styled.img`
    width: 40%;
    border-radius: 1rem;
    box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
    @media (max-width: 980px) {
        width: 100%;
    }
`;

const WelcomeSectionWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 20%;
    padding-right: 10%;
    gap: 5rem;
    padding-top: 7rem;
    @media (max-width: 1440px) {
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 10rem;
    }
    @media (max-width: 980px) {
        flex-direction: column-reverse;
        gap: 5rem;
    }
`;

export default WelcomeSection;
