import React, { FC, useState } from "react";
import { FaRocketchat, FaArrowDown } from "react-icons/fa";
import styled from "styled-components";

const QuestionCard: FC<{ question: string; answer: string }> = (props) => {
    const [isAnswerOpen, setAnswerOpen] = useState<boolean>(false);

    return (
        <QuestionCardStyled onClick={() => setAnswerOpen((prev) => !prev)} isAnswerOpen={isAnswerOpen}>
            <div>
                <div>
                    <FaRocketchat />
                    <h2>{props.question}</h2>
                </div>
                <FaArrowDown />
            </div>
            {isAnswerOpen && (
                <AnswerCard isAnswerOpen={isAnswerOpen}>
                    <p>{props.answer}</p>
                </AnswerCard>
            )}
        </QuestionCardStyled>
    );
};

const AnswerCard = styled.div<{ isAnswerOpen: boolean }>`
    background: white;
    margin-top: ${(props) => (props.isAnswerOpen ? "1rem" : "0")};
    padding-top: ${(props) => (props.isAnswerOpen ? "1rem" : "0")};
    border-top: 0.1rem solid var(--text-color);
    animation: show 0.5s ease;
    width: 100%;
    transition: 1s ease;

    & > p {
        font-size: 1.1rem;
    }

    @keyframes show {
        from {
            margin-top: 0;
            padding-top: 0;
        }
        to {
            margin-top: 1rem;
            padding-top: 1rem;
        }
    }
`;

const QuestionCardStyled = styled.li<{ isAnswerOpen: boolean }>`
    user-select: none;
    box-shadow: -5px 0px 42px 6px rgba(34, 60, 80, 0.2);
    background: white;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    padding: 1rem 2rem;
    cursor: pointer;

    & > div:nth-child(1) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > div {
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 100%;

            & > svg {
                width: 3%;
            }
            & > h2 {
                font-size: 1.5rem;
            }
        }
        & > svg {
            transform: ${(props) => (props.isAnswerOpen ? "rotate(180deg)" : "rotate(0deg)")};
            margin-left: 2rem;
            width: 3%;
        }
    }
`;

export default QuestionCard;
