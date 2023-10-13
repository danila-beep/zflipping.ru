import React from "react";
import { FaCompress, FaMailBulk, FaPhone, FaRocketchat } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContacts>
                <p>
                    <FaMailBulk />
                    email@email.com
                </p>
                <p>
                    <FaPhone />
                    +7 (123) 123 12 12
                </p>
                <p>
                    <FaRocketchat />
                    Chat with us
                </p>
            </FooterContacts>
        </FooterContainer>
    );
};

const FooterContacts = styled.ul`
    display: flex;
    gap: 2rem;
    & > p {
        color: white;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        & > svg {
            color: white;
        }

        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

const FooterContainer = styled.footer`
    width: 100%;
    bottom: 0;
    padding: 1rem 10%;
    background: var(--bg-color-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 600px){
        justify-content: center;
        flex-direction: column;
    }
`;

export default Footer;
