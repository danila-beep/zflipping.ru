import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalColors = createGlobalStyle`
    :root {
        --main-color: #4e0dff;
        --text-color: #13216e;
        --button-color: #5927e3;
        --bg-color1: white;
        --bg-color2: #e9f4ff;
        --bg-color3: #f4f6ff;
        --bg-color-dark: #1e263a;
    }
`;

export const AccentSpan = styled.span`
    color: var(--main-color);
`;

export const SectionWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 0 20%;

    @media (max-width: 1440px) {
        padding: 0 3%;
    }

    @media (max-width: 950px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const ProgressBar = styled.div<{ progressvaluesmall: number, progressvaluebig: number}>`
    height: 0.5rem;
    margin: 1rem 0;
    width: 100%;
    background: var(--main-color);
    border-radius: 1rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: ${(props) => `${props.progressvaluebig}%`};
        background: #0edc0e;
        border-radius: 1rem;
    }
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: ${(props) => `${props.progressvaluesmall}%`};;
        background: red;
        border-radius: 1rem;
    }
    & > span {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 10%;
        background: var(--main-color);
        border-radius: 1rem;
        z-index: 1;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 1rem 1rem;
    background: #f0f8fa;
    border: none;
    border-radius: 1rem;
    color: var(--text-color);
    font-weight: 700;
    font-size: 1.1rem;
`;

export const Button = styled.button`
    padding: 0.7rem 1.5rem;
    border: none;
    background: var(--button-color);
    color: white;
    font-size: 1.2rem;
    border-radius: 0.6rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        box-shadow: 0px 10px 20px 1px rgba(89, 39, 227, 0.5);
        transform: scale(102%);
    }
`;

export const FlareButton: FC<
    ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & { colorProfile?: "light" | "dark" }
> = (props) => {
    const { colorProfile, children, ...rest } = props;

    const ButtonWrapper = styled.button<{ colorProfile?: "light" | "dark" }>`
        padding: 0.7rem 1.5rem;
        font-size: 1.2rem;
        border-radius: 0.6rem;
        border: none;
        background: ${(props) => (props.colorProfile === "light" ? "white" : "var(--button-color)")};
        color: ${(props) => (props.colorProfile === "light" ? "var(--text-color)" : "white")};
        text-decoration: none;
        border-radius: 10px;
        position: relative;
        overflow-x: hidden;
        cursor: pointer;
        box-shadow: 0px 10px 20px 1px rgba(89, 39, 227, 0.2);

        &:hover {
            background: var(--button-color);
            color: white;
            box-shadow: 0px 10px 20px 1px rgba(89, 39, 227, 0.5);
            transform: scale(102%);
        }

        &:hover > span {
            position: absolute;
            top: 0;
            height: 100%;
            width: 45px;
            transform: skewX(-35deg);
            animation: flareAnimation;
            left: -150%;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));
            animation: flareAnimation 1s infinite linear;

            @keyframes flareAnimation {
                0% {
                    left: -150%;
                }
                100% {
                    left: 150%;
                }
            }
        }
    `;

    return (
        <ButtonWrapper {...rest} colorProfile={colorProfile}>
            {children} <span></span>
        </ButtonWrapper>
    );
};
