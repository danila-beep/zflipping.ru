import { useAppSelector } from "buisnessData/store";
import PropertyCard from "components/PropertyCard";
import { Button, SectionWrapper } from "customStyles/customStyles";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PropertiesSection = () => {
    const propertiesData = useAppSelector((state) => state.propertyData.data);

    const propertyCardsForRender = propertiesData.map((property, index) => {
        if (index > 2) {
            return undefined;
        }
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
        <SectionWrapper
            style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "10rem",
            }}
            id="lastFeatured"
        >
            <PropertiesHeading>
                <h1>Наиболее выгодные проекты</h1>
                <Button>
                    <NavLink to={"/kworkInvest/property"}>Все Обьекты</NavLink>
                </Button>
            </PropertiesHeading>
            <PropertiesGrid>{propertyCardsForRender}</PropertiesGrid>
        </SectionWrapper>
    );
};

const PropertiesGrid = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 1250px) {
        flex-wrap: wrap;
        gap: 3rem;
        justify-content: center;
    }
`;

const PropertiesHeading = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 3rem;

    & h1 {
        font-size: 3rem;
    }
    & > button > a {
        color: white;
        text-decoration: none;
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }
    @media (max-width: 950px) {
    }
`;

export default PropertiesSection;
