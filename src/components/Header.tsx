import { useAppSelector } from "buisnessData/store";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { FaArrowDown, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { globalImages } from "assets/globalImages/assetsReady";

const Header: FC<{ scrollListener?: boolean }> = (props) => {

    const navigationData = useAppSelector((state) => state.navBarData.data);
    const navBarLinksForRender = navigationData.map((navEl) => {
        const link = () => {
            switch (navEl.title) {
                case "Главная":
                    return "/";
                case "О компании":
                    return "/about";
                case "Наши обьекты":
                    return "/property";
                case "Контакты":
                    return "/contactUs";
                default:
                    return "/404";
            }
        };

        return (
            <li key={navEl.id}>
                <NavLink to={link()}>
                    {navEl.title}
                    {navEl.title === "Главная" ? <FaArrowDown /> : undefined}
                </NavLink>
                {navEl.subLinks && (
                    <div>
                        {navEl.subLinks.map((subNav) => {
                            if (window.location.pathname !== "/") {
                                return (
                                    <Link key={subNav.href} to={`/#${subNav.href}`} tabIndex={1}>
                                        {subNav.title}
                                    </Link>
                                );
                            } else {
                                return (
                                    <a key={subNav.href} href={`#${subNav.href}`} tabIndex={1}>
                                        {subNav.title}
                                    </a>
                                );
                            }
                        })}
                    </div>
                )}
            </li>
        );
    });

    const [isHeaderTop, setHeaderTop] = useState<boolean>(props.scrollListener ? true : false);
    props.scrollListener &&
        window.addEventListener("scroll", (event) => {
            if (window.pageYOffset === 0) {
                setHeaderTop(true);
            } else {
                setHeaderTop(false);
            }
        });

    const [isBurgerMenuShow, setBurgerMenuShow] = useState<boolean>(false);

    return (
        <HeaderWrapper isHeaderTop={isHeaderTop}>
            <div>
                <img src={globalImages.logo} alt="Logo" />
                <HeaderNavigation>{navBarLinksForRender}</HeaderNavigation>
            </div>
            <BurgerMenu onBlur={() => setBurgerMenuShow(false)}>
                <FaBars onClick={() => setBurgerMenuShow((prev) => !prev)} />
                {isBurgerMenuShow && <ul>{navBarLinksForRender}</ul>}
            </BurgerMenu>
        </HeaderWrapper>
    );
};

const BurgerMenu = styled.div`
    & > svg {
        display: none;

        font-size: 1.8rem;
        color: var(--text-color);
        cursor: pointer;
        transition: 0.1s;

        @media (max-width: 950px) {
            display: block;
            align-items: center;
            margin-left: 2rem;
        }
        &:hover {
            color: var(--main-color);
            transform: scale(105%);
        }
    }
    & > ul {
        position: absolute;
        left: 0;
        bottom: -20rem;
        height: fit-content;
        width: 100%;
        background: white;
        box-shadow: 0px 15px 10px -15px rgba(89, 39, 227, 0.2);
        animation: 0.5s show ease;
        display: flex;
        list-style: none;
        flex-direction: column;
        padding: 2rem 2rem;
        gap: 1rem;

        & > li {
            padding: 1rem 10%;
            width: 100%;
            background: #f0f8fa;
            display: flex;
            justify-content: center;
            flex-direction: column;

            & > a {
                text-decoration: none;
                font-size: 1.2rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                & > svg {
                    @media (max-width: 950px) {
                        display: none;
                    }
                }
            }

            & > div > a {
                display: none;
            }
        }

        @keyframes show {
            0% {
                transform: translateY(-10rem);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }

    @media (max-width: 950px) {
        display: flex;
        align-items: center;
        margin-left: 2rem;
    }
`;

const HeaderNavigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-color);
    list-style: none;

    & li {
        cursor: pointer;
        transition: 0.3s ease;
        width: fit-content;
        position: relative;

        & > a {
            font-weight: 600;
            font-size: 1.2rem;
            text-decoration: none;
            text-wrap: nowrap;
            display: flex;
            align-items: center;

            & > svg {
                margin-left: 0.5rem;
            }
            &:hover {
                color: var(--main-color);
            }
        }

        & > div > a {
            display: none;
        }
        & div {
            position: absolute;
        }
        &:hover > div {
            position: absolute;
            left: -1rem;

            display: flex;
            flex-direction: column;
            background: white;
            padding: 1rem;
            border-top: 0.5rem solid var(--main-color);
            border-radius: 1rem;
            width: fit-content;
        }
        &:hover > div > a {
            display: block;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            text-wrap: nowrap;
            color: var(--text-color);

            &:hover {
                color: var(--main-color);
            }
        }
    }

    @media (max-width: 950px) {
        display: none;
    }
`;

const HeaderWrapper = styled.header<{ isHeaderTop: boolean }>`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem 20%;
    background: ${(props) => (props.isHeaderTop ? "transparent" : "white")};
    z-index: 100;
    box-shadow: ${(props) => (props.isHeaderTop ? "none" : "0px 7px 21px -12px rgba(34, 60, 80, 0.6)")};
    transition: .3s ease;

    & div:nth-child(1) {
        display: flex;
        gap: 5rem;

        & > img {
            width: 20%;
            @media (max-width: 950px) {
                width: 50%;
            }
        }
    }

    & div:nth-child(2) {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 1440px) {
        padding: 1.3rem 3%;
    }
`;

export default Header;
