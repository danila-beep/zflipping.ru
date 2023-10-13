import React from "react";
import styled from "styled-components";

const OccupancyCard = (props: { value?: number }) => {
    return <CardWrapper>{props.value ? props.value : 0}%</CardWrapper>;
};

const CardWrapper = styled.div`
    display: inline-block;
    padding: 0.5rem;
    background: #f0f3ff;
    color: var(--text-color);
    font-weight: 700;
    cursor: pointer;
    transition: .3s ease;


    &:hover {
        background: var(--main-color);
        color: white;

    }
`;

export default OccupancyCard;
