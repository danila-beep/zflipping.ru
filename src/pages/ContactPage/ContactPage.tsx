import { globalImages } from "assets/globalImages/assetsReady";
import Header from "components/Header";
import React from "react";
import styled from "styled-components";

const ContactPage = () => {
    return (
        <>
            <Header scrollListener={false} />
            <ContactPageWrapper>
                <img src={globalImages.contactHeading} alt="" />
                <ContactTitle>
                    <h2>Есть вопросы?</h2>
                    <h1>Напишите нам!</h1>
                </ContactTitle>
                <ContactCards>
                    <li>
                        <img src={globalImages.contactImage1} alt="" />
                        <div>
                            <h3>Наш E-mail</h3>
                            <p>contact@revest.com</p>
                        </div>
                    </li>
                    <li>
                        <img src={globalImages.contactImage2} alt="" />
                        <div>
                            <h3>Наш телефон</h3>
                            <p>(414) 807 - 7478</p>
                        </div>
                    </li>
                    <li>
                        <img src={globalImages.contactImage3} alt="" />
                        <div>
                            <h3>Чат с оператором</h3>
                            <p>Открыть</p>
                        </div>
                    </li>
                </ContactCards>
            </ContactPageWrapper>
        </>
    );
};

const ContactCards = styled.ul`
    display: flex;
    list-style: none;
    gap: 5rem;
    margin-top: 30%;
    justify-content: center;

    @media (max-width: 1280px) {
        flex-direction: column;
        margin-top: 30%;
    }
    @media (max-width: 950px) {
        margin-top: 50%;
    }
    @media (max-width: 800px) {
        margin-top: 55%;
    }
    @media (max-width: 700px) {
        margin-top: 65%;
    }
    @media (max-width: 500px) {
        margin-top: 70%;
    }

    & > li {
        padding: 2rem 4rem;
        width: 20%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
        border-radius: 1rem;
        background: white;

        @media (max-width: 1440px) {
            width: 25%;
        }

        @media (max-width: 1280px) {
            flex-direction: row;
            width: 30rem;
            margin: 0 auto;
            gap: 3rem;
            text-align: start;
            align-items: center;
        }

        @media (max-width: 950px) {
            width: 35rem;
        }

        & > img {
            width: 60%;
            margin-bottom: 2rem;
            @media (max-width: 1280px) {
                width: 30%;
                margin: 0;
            }
        }

        & > div h3 {
            padding-bottom: 0.5rem;
        }

        & > div p:nth-child(2) {
            padding-top: 0.5rem;
            color: var(--main-color);
            
            border-top: 0.1rem solid black;
        }
    }
`;

const ContactTitle = styled.div`
    position: absolute;
    top: 20%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    background: white;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 2rem 3rem;
    box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
    border-radius: 1rem;

    @media (max-width: 1280px) {
        top: 10%;
    }

    @media (max-width: 950px) {
        top: 22%;
    }
    @media (max-width: 800px) {
        top: 18%;
    }

    & > h1 {
        margin: 0 auto;
        font-size: 3.5rem;
    }
    & > h2 {
        margin: 0 auto;
    }
`;

const ContactPageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 3rem;

    & > img {
        position: absolute;
        width: 100%;
        z-index: -1;
        top: 0;
        left: 0;
    }
`;

export default ContactPage;
