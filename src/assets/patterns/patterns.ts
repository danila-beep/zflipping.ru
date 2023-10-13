import styled from "styled-components";

export const OvalPattern = styled.div`
    display: none;
    @media (max-width: 950px) {
        display: block;
        position: absolute;
        z-index: -1;
        width: 40%;
        height: 40%;
        background: rgba(29, 30, 217, 0.4);
        transform: rotate(20deg);
        filter: blur(100px);
        border-radius: 50%;
    }
`;
