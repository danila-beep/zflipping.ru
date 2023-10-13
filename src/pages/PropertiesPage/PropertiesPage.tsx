import { globalImages } from "assets/globalImages/assetsReady";
import { useAppSelector } from "buisnessData/store";
import Footer from "components/Footer";
import Header from "components/Header";
import PropertyCard from "components/PropertyCard";
import { AccentSpan } from "customStyles/customStyles";
import React from "react";
import styled from "styled-components";

const PropertiesPage = () => {
    const propertiesData = useAppSelector((state) => state.propertyData.data);

    const propertyCardsForRender = propertiesData.map((property) => {
        const {
            id,
            city,
            address,
            projectBuySum,
            firstСontribution,
            sellSum,
            incomePersantage,
            incomePerMonth,
            realizationTime,
            mainImage,
        } = property;
        return (
            <PropertyCard
                key={id}
                id={id}
                city={city}
                address={address}
                projectBuySum={projectBuySum}
                firstСontribution={firstСontribution}
                sellSum={sellSum}
                incomePersantage={incomePersantage}
                incomePerMonth={incomePerMonth}
                realizationTime={realizationTime}
                mainImage={mainImage}
            />
        );
    });

    return (
        <>
            <Header scrollListener={false} />
            <PropertiesPageWrapper>
                <PropertiesHeading background={globalImages.propertiesHeading}>
                    <h1>Наши обьекты</h1>
                </PropertiesHeading>
                <PropertiesList>
                    <div>{propertyCardsForRender}</div>
                </PropertiesList>
                <Footer />
            </PropertiesPageWrapper>
        </>
    );
};

const PropertiesList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    align-items: center;
    justify-content: center;
    @media (max-width: 650px) {
        padding: 3rem 3%;
    }
    & > div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;

        @media (max-width: 1280px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 850px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

const PropertiesHeading = styled.div<{ background: string }>`
    position: relative;
    display: flex;
    padding: 10% 20%;
    align-items: center;
    justify-content: center;
    background: url(${(props) => props.background});
    background-position: center;
    background-size: cover;
    & > h1 {
        font-size: 3rem;
        padding: 2rem;
        background: white;
        border-radius: 1rem;
        box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
        text-align: center;

        @media (max-width: 1440px) {
            margin-top: 0;
        }
    }
`;

const PropertiesPageWrapper = styled.main`
    padding-top: 3.5%;
`;

export default PropertiesPage;
