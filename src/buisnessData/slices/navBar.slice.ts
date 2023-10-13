import { createSlice } from "@reduxjs/toolkit";

const initialState: NavBarDataType = {
    data: [
        {
            id: 1,
            title: "Главная",
            subLinks: [
                {title: "Приветствие", href: "hello"},
                {title: "Что мы предлагаем?", href: "offer"},
                {title: "Как мы работаем?", href: "howItWorks"},
                {title: "Почему выбирают нас?", href: "whyUs"},
                {title: "Мы в цифрах?", href: "numbers"},
                {title: "Наиболее выгодные проекты", href: "lastFeatured"},
                {title: "FAQ", href: "faq"},
                {title: "Присоединяйтесь!", href: "join"},
            ],
        },
        { id: 2, title: "Наши обьекты" },
        { id: 3, title: "О компании" },
        { id: 4, title: "Контакты" },
    ],
    isFetching: false,
};

const slice = createSlice({
    name: "navBarData",
    initialState,
    reducers: {},
});

export const navBarDataActions = slice.actions;
export const navBarDataReducer = slice.reducer;

type NavBarDataType = {
    data: NavBarItemType[];
    isFetching: boolean;
};

type NavBarItemType = {
    id: number;
    title: string;
    subLinks?: {
        title: string,
        href: string
    }[];
};
