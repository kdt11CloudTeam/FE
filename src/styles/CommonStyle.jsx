import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageSpace = styled.div`
    width: 100vw;
    min-height: 100dvh;

    @media (hover: hover) and (pointer: fine) {
        width: 360px;
    }
`;
