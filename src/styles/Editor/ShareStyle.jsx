import styled from "styled-components";

export const share = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const cavus_container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const page_container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const page = styled.div`
    width: 630px;
    height: 904px;
    background-color: #ffffff;
    margin: 0 16px;
`;

export const page_btn = styled.img`
    width: 16px;
    height: 32px;
    top: 50%;
    margin: 0 16px;
`;

export const pagecounter = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #858585;
    margin-bottom: 12px;
`;

export const side = styled.div`
    display: flex;
    flex-direction: column;
`;

export const btn_container = styled.div`
    height: 527px;
`;

export const title = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #616161;
    margin-top: 42px;
`;

export const btn = styled.button`
    border-radius: 50px;
    border: 1px solid #af8a79;
    width: 240px;
    height: 48px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    background-color: #ffffff;
    color: #af8a79;
    margin-top: 24px;

    &:hover {
        background-color: #af8a79;
        color: #ffffff;
    }
`;

export const logo_container = styled.div`
    height: 359px;
    display: flex;
    flex-direction: column-reverse;
    align-self: center;
`;

export const logo = styled.img`
    height: 18px;
    width: 70px;
`;
