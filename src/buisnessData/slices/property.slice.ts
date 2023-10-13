import { createSlice } from "@reduxjs/toolkit";
import { propertyOneAssets } from "assets/propertiesPhotos/property-1/propertyAssetsOne";
import { v1 } from "uuid";

export type PropertyDataType = {
    id: string;
    city: string;
    address: string;
    mainImage: string;
    description: string;
    reasons: string[];
    forecasts: string[];
    realizationTime: string;
    projectBuySum: string;
    firstСontribution: string;
    contributionPerMonth: string;
    contributionDetails: {
        id: number;
        title: string;
        contributionItems: { id: number; title: string; sum: string }[];
    }[];
    sellSum: string;
    incomeSum: string;
    incomePerMonth: string;
    incomePersantage: string;
    beforeImages: string[];
    afterImages: string[];
};

const initialState: { data: PropertyDataType[]; isFetching: boolean } = {
    data: [
        {
            id: "1",
            city: "Москва",
            address: "Ставропольская ул., д. 22",
            mainImage: propertyOneAssets.propertyHeading,
            description: "1231231321",
            reasons: ["123123", "123123", "123123"],
            forecasts: ["123123", "123123", "123123"],
            realizationTime: "24 Дня",
            projectBuySum: "1 200 300 Р",
            firstСontribution: "200 000 Р",
            contributionPerMonth: "30 000 Р",
            contributionDetails: [
                {
                    id: 1,
                    title: "Ремонт",
                    contributionItems: [
                        { id: 1, title: "Стоимость работы", sum: "20 000 Р" },
                        { id: 2, title: "Стоимость материалов", sum: "30 000 Р" },
                        { id: 3, title: "Мебелировка", sum: "50 000 Р" },
                    ],
                },
                {
                    id: 2,
                    title: "Прочие расходы",
                    contributionItems: [{ id: 1, title: "Прочее", sum: "20 000 Р" }],
                },
            ],
            sellSum: "1 800 000 Р",
            incomeSum: "600 000 Р",
            incomePerMonth: "80 000 Р",
            incomePersantage: "20 %",
            beforeImages: propertyOneAssets.before,
            afterImages: propertyOneAssets.after,
        },
        {
            id: "2",
            city: "Москва",
            address: "Ставропольская ул., д. 22",
            mainImage: propertyOneAssets.propertyHeading,
            description: "1231231321",
            reasons: ["123123", "123123", "123123"],
            forecasts: ["123123", "123123", "123123"],
            realizationTime: "24 Дня",
            projectBuySum: "1 200 300 Р",
            firstСontribution: "200 000 Р",
            contributionPerMonth: "30 000 Р",
            contributionDetails: [
                {
                    id: 1,
                    title: "Ремонт",
                    contributionItems: [
                        { id: 1, title: "Стоимость работы", sum: "20 000 Р" },
                        { id: 2, title: "Стоимость материалов", sum: "30 000 Р" },
                        { id: 3, title: "Мебелировка", sum: "50 000 Р" },
                    ],
                },
                {
                    id: 2,
                    title: "Прочие расходы",
                    contributionItems: [{ id: 1, title: "Прочее", sum: "20 000 Р" }],
                },
            ],
            sellSum: "1 800 000 Р",
            incomeSum: "600 000 Р",
            incomePerMonth: "80 000 Р",
            incomePersantage: "20 %",
            beforeImages: propertyOneAssets.before,
            afterImages: propertyOneAssets.after,
        },
        {
            id: "3",
            city: "Москва",
            address: "Ставропольская ул., д. 22",
            mainImage: propertyOneAssets.propertyHeading,
            description: "1231231321",
            reasons: ["123123", "123123", "123123"],
            forecasts: ["123123", "123123", "123123"],
            realizationTime: "24 Дня",
            projectBuySum: "1 200 300 Р",
            firstСontribution: "200 000 Р",
            contributionPerMonth: "30 000 Р",
            contributionDetails: [
                {
                    id: 1,
                    title: "Ремонт",
                    contributionItems: [
                        { id: 1, title: "Стоимость работы", sum: "20 000 Р" },
                        { id: 2, title: "Стоимость материалов", sum: "30 000 Р" },
                        { id: 3, title: "Мебелировка", sum: "50 000 Р" },
                    ],
                },
                {
                    id: 2,
                    title: "Прочие расходы",
                    contributionItems: [{ id: 1, title: "Прочее", sum: "20 000 Р" }],
                },
            ],
            sellSum: "1 800 000 Р",
            incomeSum: "600 000 Р",
            incomePerMonth: "80 000 Р",
            incomePersantage: "20 %",
            beforeImages: propertyOneAssets.before,
            afterImages: propertyOneAssets.after,
        },
        {
            id: "4",
            city: "Москва",
            address: "Ставропольская ул., д. 22",
            mainImage: propertyOneAssets.propertyHeading,
            description: "1231231321",
            reasons: ["123123", "123123", "123123"],
            forecasts: ["123123", "123123", "123123"],
            realizationTime: "24 Дня",
            projectBuySum: "1 200 300 Р",
            firstСontribution: "200 000 Р",
            contributionPerMonth: "30 000 Р",
            contributionDetails: [
                {
                    id: 1,
                    title: "Ремонт",
                    contributionItems: [
                        { id: 1, title: "Стоимость работы", sum: "20 000 Р" },
                        { id: 2, title: "Стоимость материалов", sum: "30 000 Р" },
                        { id: 3, title: "Мебелировка", sum: "50 000 Р" },
                    ],
                },
                {
                    id: 2,
                    title: "Прочие расходы",
                    contributionItems: [{ id: 1, title: "Прочее", sum: "20 000 Р" }],
                },
            ],
            sellSum: "1 800 000 Р",
            incomeSum: "600 000 Р",
            incomePerMonth: "80 000 Р",
            incomePersantage: "20 %",
            beforeImages: propertyOneAssets.before,
            afterImages: propertyOneAssets.after,
        },
        {
            id: "5",
            city: "Москва",
            address: "Ставропольская ул., д. 22",
            mainImage: propertyOneAssets.propertyHeading,
            description: "1231231321",
            reasons: ["123123", "123123", "123123"],
            forecasts: ["123123", "123123", "123123"],
            realizationTime: "24 Дня",
            projectBuySum: "1 200 300 Р",
            firstСontribution: "200 000 Р",
            contributionPerMonth: "30 000 Р",
            contributionDetails: [
                {
                    id: 1,
                    title: "Ремонт",
                    contributionItems: [
                        { id: 1, title: "Стоимость работы", sum: "20 000 Р" },
                        { id: 2, title: "Стоимость материалов", sum: "30 000 Р" },
                        { id: 3, title: "Мебелировка", sum: "50 000 Р" },
                    ],
                },
                {
                    id: 2,
                    title: "Прочие расходы",
                    contributionItems: [{ id: 1, title: "Прочее", sum: "20 000 Р" }],
                },
            ],
            sellSum: "1 800 000 Р",
            incomeSum: "600 000 Р",
            incomePerMonth: "80 000 Р",
            incomePersantage: "20 %",
            beforeImages: propertyOneAssets.before,
            afterImages: propertyOneAssets.after,
        },
        {
            id: "6",
            city: "Москва",
            address: "Ставропольская ул., д. 22",
            mainImage: propertyOneAssets.propertyHeading,
            description: "1231231321",
            reasons: ["123123", "123123", "123123"],
            forecasts: ["123123", "123123", "123123"],
            realizationTime: "24 Дня",
            projectBuySum: "1 200 300 Р",
            firstСontribution: "200 000 Р",
            contributionPerMonth: "30 000 Р",
            contributionDetails: [
                {
                    id: 1,
                    title: "Ремонт",
                    contributionItems: [
                        { id: 1, title: "Стоимость работы", sum: "20 000 Р" },
                        { id: 2, title: "Стоимость материалов", sum: "30 000 Р" },
                        { id: 3, title: "Мебелировка", sum: "50 000 Р" },
                    ],
                },
                {
                    id: 2,
                    title: "Прочие расходы",
                    contributionItems: [{ id: 1, title: "Прочее", sum: "20 000 Р" }],
                },
            ],
            sellSum: "1 800 000 Р",
            incomeSum: "600 000 Р",
            incomePerMonth: "80 000 Р",
            incomePersantage: "20 %",
            beforeImages: propertyOneAssets.before,
            afterImages: propertyOneAssets.after,
        },
    ],
    isFetching: false,
};

const slice = createSlice({
    name: "propertyData",
    initialState,
    reducers: {},
});

export const propertyDataActions = slice.actions;
export const propertyDataReducer = slice.reducer;
