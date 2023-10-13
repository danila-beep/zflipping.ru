import { PropertyDataType } from "buisnessData/slices/property.slice";
import { AccentSpan, Button, FlareButton, ProgressBar } from "customStyles/customStyles";
import React, { FC } from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type PropertyCardPropsType = {
    id: string
    city: string
    address: string
    projectBuySum: string
    firstСontribution: string
    sellSum: string
    incomePersantage: string
    incomePerMonth: string
    realizationTime: string
    mainImage: string
};

const PropertyCard: FC<PropertyCardPropsType> = (props) => {
    return (
        <PropertyCardWrapper>
            <ProgressHeading>
                <img src={props.mainImage ? props.mainImage : undefined} alt="" />
                <h1>{props.city}</h1>
                <p>
                    <FaMapMarkerAlt color="grey" /> 310100 {props.address}, {props.city}
                </p>
                <ProgressBar progressvaluebig={60} progressvaluesmall={30}></ProgressBar>
            </ProgressHeading>
            <CommercialInfo>
                <div>
                    Сумма покупки <br />{" "}
                    <AccentSpan style={{ color: "#0bdc0e" }}>{props.projectBuySum} ₽</AccentSpan>
                </div>
                <div>
                    Сумма вложения <br />{" "}
                    <AccentSpan style={{ color: "red" }}>{props.firstСontribution} ₽</AccentSpan>
                </div>
                <div>
                    Цена продажи <br /> <AccentSpan>{props.sellSum} ₽</AccentSpan>
                </div>
            </CommercialInfo>
            <ActionContainer>
                <div>
                    <p>
                        <FaClock />
                        Время реализации проекта
                    </p>
                    <p>{props.realizationTime}</p>
                </div>
                <NavLink to={`/zflipping.ru/property/${props.id}`}>
                    <FlareButton>Подробнее</FlareButton>
                </NavLink>
            </ActionContainer>
        </PropertyCardWrapper>
    );
};

const ActionContainer = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    & div:nth-child(1) p:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 1.1rem;
    }
    & div:nth-child(1) p:nth-child(2) {
        color: var(--text-color);
        font-size: 1.1rem;
        font-weight: 700;
    }
    & > a {
        text-decoration: none;
        & > button {
            display: flex;
            width: 100%;
            justify-content: center;
        }
    }
`;

const CommercialInfo = styled.div`
    color: var(--text-color);
    border-top: 0.1rem solid lightgray;
    border-bottom: 0.1rem solid lightgray;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;

    & div {
        text-align: center;
        display: flex;
        justify-content: space-between;
        font-size: 1.1rem;

        & > span {
            font-weight: 700;
        }
    }
`;

const ProgressHeading = styled.div`
    margin-bottom: 1rem;

    & img {
        width: 100%;
    }
    & h1 {
        margin-top: 1rem;
        font-size: 2rem;
    }
    & p {
        margin-top: 1rem;
    }
`;

const PropertyCardWrapper = styled.div`
    width: 25rem;
    padding: 1rem;
    color: white;
    box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
    border-radius: 1rem;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export default PropertyCard;
