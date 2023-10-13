import { useAppSelector } from "buisnessData/store";
import Footer from "components/Footer";
import { Button, ProgressBar } from "customStyles/customStyles";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import axios from "axios";
import Header from "components/Header";
import Preloader from "components/Preloader";

const PropertyPageRework = () => {
    const { id } = useParams();

    const propertyData = useAppSelector((state) => state.propertyData.data);

    const [mapLocation, setMapLocation] = useState<number[] | undefined>();

    const currentProperty = id ? propertyData.find((property) => property.id === id) : undefined;

    useEffect(() => {
        axios
            .get(`https://geocode.maps.co/search?q={${currentProperty?.address},${currentProperty?.city}}`)
            .then((res) => {
                setMapLocation([res.data[0].lat, res.data[0].lon]);
            });
    }, []);

    if (currentProperty && mapLocation) {
        return (
            <PropertyPageWrapper>
                <Header scrollListener={false} />
                <PropertyHeaderImage background={currentProperty.mainImage}></PropertyHeaderImage>
                <PropertyContent>
                    <div>
                        <PropertyTitle>
                            <h1>{currentProperty.city}</h1>
                            <p>
                                <FaMapMarkerAlt color="grey" />
                                {currentProperty.address} , {currentProperty.city}
                            </p>
                        </PropertyTitle>
                        <PropertyMap>
                            <YMaps>
                                <Map
                                    width={"100%"}
                                    height={200}
                                    defaultState={{
                                        center: mapLocation,
                                        zoom: 12,
                                    }}
                                >
                                    <Placemark geometry={mapLocation} />
                                </Map>
                            </YMaps>
                        </PropertyMap>
                        <PropertyDescription>
                            <h2>Описание обьекта</h2>
                            <p>{currentProperty.description}</p>
                        </PropertyDescription>
                        <PropertyAdvantages>
                            <h2>Почему мы выбрали именно этот обьект?:</h2>
                            <ul>
                                {currentProperty.reasons.map((reason) => {
                                    return (
                                        <li>
                                            <FaCheckCircle />
                                            {reason}
                                        </li>
                                    );
                                })}
                            </ul>
                        </PropertyAdvantages>
                        <PropertyNumbers>
                            <h2>Наши прогнозы:</h2>
                            <ul>
                                {currentProperty.forecasts.map((forecast) => {
                                    return <li>{forecast}</li>;
                                })}
                            </ul>
                        </PropertyNumbers>
                    </div>
                    <div>
                        <ActionPropertyHeading>
                            <div>Время реализации проекта: {currentProperty.realizationTime}</div>
                            <ProgressBar
                                style={{ outline: "2px solid var(--text-color)" }}
                                progressvaluebig={60}
                                progressvaluesmall={30}
                            />
                            <ul>
                                <li>
                                    <p>Стоимость проекта</p>
                                    <p>{currentProperty.projectBuySum}</p>
                                </li>
                                <li>
                                    <p>Первый взнос</p>
                                    <p>{currentProperty.firstСontribution}</p>
                                </li>
                                <li>
                                    <p>Оплата в месяц</p>
                                    <p>{currentProperty.contributionPerMonth}</p>
                                </li>
                            </ul>
                        </ActionPropertyHeading>
                        <ActionPropertyContent>
                            <p>Детализация расходов</p>
                            <div>
                                {currentProperty.contributionDetails.map((contributionList) => {
                                    return (
                                        <div key={contributionList.id}>
                                            <p>{contributionList.title}</p>
                                            <ul>
                                                {contributionList.contributionItems.map(
                                                    (contributionItem) => {
                                                        return (
                                                            <li key={contributionItem.id}>
                                                                <p>{contributionItem.title}</p>
                                                                <p>{contributionItem.sum}</p>
                                                            </li>
                                                        );
                                                    },
                                                )}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </ActionPropertyContent>
                        <ActionPropertyDeals>
                            <ul>
                                <li>
                                    <p>Цена продажи</p>
                                    <p>{currentProperty.sellSum}</p>
                                </li>
                                <li>
                                    <p>Прибыль с проекта</p>
                                    <p>{currentProperty.incomeSum}</p>
                                </li>
                                <li>
                                    <p>Ежемесячная прибыль</p>
                                    <p>{currentProperty.incomePerMonth}</p>
                                </li>
                                <li>
                                    <p>Ежемесячный процент</p>
                                    <p>{currentProperty.incomePerMonth}</p>
                                </li>
                            </ul>
                            <Button
                                style={{
                                    width: "100%",
                                    justifyContent: "center",
                                    background: "white",
                                    color: "var(--text-color)",
                                    marginTop: "1rem",
                                }}
                            >
                                Скачать полный отчет
                            </Button>
                        </ActionPropertyDeals>
                    </div>
                </PropertyContent>
                <hr style={{ margin: "2rem 3%" }} />
                <PropertyGallery>
                    <div>
                        <h1>До</h1>
                        <div>
                            {currentProperty.beforeImages.map((beforeImage) => {
                                return <img src={beforeImage} alt="" />;
                            })}
                        </div>
                    </div>
                    <div>
                        <h1>После</h1>
                        <div>
                            {currentProperty.afterImages.map((afterImages) => {
                                return <img src={afterImages} alt="" />;
                            })}
                        </div>
                    </div>
                </PropertyGallery>
                <Footer />
            </PropertyPageWrapper>
        );
    } else {
        return <Preloader />;
    }
};

const PropertyGallery = styled.div`
    padding: 0 3rem;
    padding-bottom: 5rem;
    gap: 5rem;
    display: flex;
    & > div {
        width: 50%;
        & > h1 {
            margin-bottom: 2rem;
        }
        & > div {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            & > img {
                flex: 1;
                border-radius: 1rem;
                width: 250px;
                @media screen and (max-width: 700px) {
                    width: 85vw;
                }
            }
        }
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

const ActionPropertyDeals = styled.div`
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 2rem 3rem;
    background: var(--main-color);
    box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
    & > ul {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        @media (max-width: 450px) {
            grid-template-columns: repeat(1, 1fr);
        }
        & > li {
            background: var(--text-color);
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border-radius: 1rem;
            @media (max-width: 450px) {
                flex-direction: row;
            }
            & > p {
                color: white;
            }
            & > p:nth-child(2) {
                font-weight: 700;
            }
        }
    }
`;

const ActionPropertyContent = styled.div`
    box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
    padding-bottom: 0;
    background: white;
    & > p {
        font-size: 1.7rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }
    & > div {
        display: flex;
        flex-direction: column;
        & > div {
            margin-bottom: 2rem;
            & > p {
                font-size: 1.3rem;
                margin-bottom: 0.5rem;
            }
            & > ul {
                list-style: none;
                padding: 0;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 1fr;
                grid-column-gap: 2rem;
                grid-row-gap: 2rem;
                text-align: center;
                margin-bottom: 1rem;
                border-top: 2px solid var(--main-color);
                padding-top: 1.5rem;
                @media (max-width: 1170px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 950px) {
                    grid-template-columns: repeat(3, 1fr);
                }
                @media (max-width: 620px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 450px) {
                    grid-template-columns: repeat(1, 1fr);
                }

                & > li {
                    padding: 1rem;
                    border-radius: 1rem;
                    background: #eff8fa;
                    display: flex;
                    gap: 1rem;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    @media (max-width: 450px) {
                        flex-direction: row;
                    }
                    & > p:nth-child(2) {
                        color: var(--main-color);
                        font-weight: 600;
                    }
                }
            }
            & > div {
                padding: 1rem;
                border-radius: 1rem;
                background: var(--main-color);
                display: flex;
                justify-content: space-between;
                & > p {
                    color: white;
                }
            }
        }
    }
`;

const ActionPropertyHeading = styled.div`
    background: var(--main-color);
    padding: 2rem 3rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
    color: white;
    & > div:nth-child(1) {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
    }
    & > ul {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        @media (max-width: 450px) {
            grid-template-columns: repeat(1, 1fr);
        }
        & > li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            background: var(--text-color);
            padding: 1rem;
            border-radius: 1rem;
            text-align: center;
            gap: 1rem;
            @media (max-width: 450px) {
                flex-direction: row;
            }

            & > p {
                color: white;
            }
            & > p:nth-child(2) {
                font-weight: 700;
            }
        }
    }
`;

const PropertyNumbers = styled.div`
    & > h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    & > ul {
        padding: 0;
        list-style: none;
        display: flex;
        gap: 3rem;

        & > li {
            padding: 1rem 2rem;
            text-align: center;
            border-radius: 1rem;
            box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
            background: #f0f8fa;
            width: 20rem;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media (max-width: 950px) {
                width: 100%;
            }
        }

        @media (max-width: 950px) {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }
`;

const PropertyAdvantages = styled.div`
    & h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    & > ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        & > li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.1rem;
            color: var(--text-color);

            & > svg {
                color: var(--main-color);
            }
        }
    }
`;

const PropertyDescription = styled.div`
    margin-bottom: 3rem;

    & > h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    & > p {
        font-weight: 300;
    }
`;

const PropertyMap = styled.div`
    margin-bottom: 2rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
`;

const PropertyTitle = styled.div`
    border-bottom: 0.1rem solid lightgray;
    padding-bottom: 1.5rem;
    margin-bottom: 3rem;

    & > h1 {
        font-size: 3rem;
    }
    & > p {
        font-size: 1.1rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
`;

const PropertyContent = styled.div`
    padding: 2rem 10%;
    display: flex;
    justify-content: space-between;

    & > div:nth-child(1) {
        width: 50%;
        padding: 1rem;

        @media (max-width: 950px) {
            width: 100%;
        }
    }

    & > div:nth-child(2) {
        width: 45%;
        padding: 1rem;
        margin-top: -10rem;
        z-index: 10;

        @media (max-width: 950px) {
            margin-top: 2rem;
            width: 100%;
        }
    }

    @media (max-width: 1440px) {
        padding: 2rem 3%;
    }

    @media (max-width: 950px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const PropertyHeaderImage = styled.div<{ background: string }>`
    position: relative;
    height: 60vh;
    background-position: center;
    background-size: cover;
    background: url(${(props) => props.background});
`;

const PropertyPageWrapper = styled.main``;

export default PropertyPageRework;
