import styled, { css } from "styled-components";

export const toolbar = styled.div`
    display: flex;
    flex-direction: row;
`;

export const toolbar_container = styled.div`
    position: absolute;
    transition: left 0.3s ease-in-out;
    left: ${(props) => (props.isHidden ? "-20rem" : "0")};
    top: 0;
    height: 100vh;
    width: 20rem;
    background-color: #ffffff;
    border-radius: 0 24px 24px 0;
    padding: 18px 24px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    max-height: 100vh;
    overflow-x: hidden;
`;

export const toolbar_header = styled.div`
    height: 36px;
    width: 20rem;
    background-color: #cea595;
    border-radius: 0 24px 0 0;
    margin-top: -18px;
    margin-left: -24px;
    padding: 9px;
`;
export const toolbar_logo = styled.img`
    width: 69px;
    height: 18px;
`;

export const toolbar_title = styled.div`
    color: #4e1e09;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    align-self: start;
    padding-top: 18px;
`;

export const toolbar_subtitle = styled.div`
    color: #4e1e09;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    align-self: start;
    padding: 16px 0;
`;

export const toolbar_line = styled.div`
    width: 20rem;
    height: 5px !important;
    min-height: 5px;
    background-color: #f3ebe7;
    margin-left: -24px;
    transition: none;
`;

export const page_controls = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`;

export const page_btn = styled.button`
    border-radius: 50px;
    border: 1px solid #af8a79;
    background-color: transparent;
    color: #af8a79;
    width: 240px;
    height: 48px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #af8a79;
        color: #ffffff;
    }
`;

export const content_controls = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    padding: 16px 8px;
    justify-items: center;
    align-items: center;
`;

export const content_btn = styled.button`
    border-radius: 8px;
    border: 1px solid #af8a79;
    background-color: transparent;
    color: #af8a79;
    width: 120px;
    height: 120px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const content_input = styled.input`
    border-radius: 8px;
    border: 1px solid #af8a79;
    background-color: transparent;
    color: #af8a79;
    width: 120px;
    height: 120px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const content_img = styled.img`
    margin: 14px;
`;

export const extra_controls = styled.div``;

export const text_controls = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`;

export const text_btn = styled.button`
    border-radius: 50px;
    border: 1px solid #af8a79;
    width: 240px;
    height: 48px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    background-color: transparent;
    color: #af8a79;

    &:hover {
        background-color: #af8a79;
        color: #ffffff;
    }
`;

export const text_input = styled.input`
    border-radius: 50px;
    border: 1px solid #af8a79;
    background-color: transparent;
    color: #af8a79;
    width: 240px;
    height: 48px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
`;

export const toolbar_toggle = styled.button`
    position: absolute;
    top: 50%;
    left: ${(props) => (props.isHidden ? "0" : "20rem")};
    transform: translateY(-50%);
    width: 36px;
    height: 100px;
    background: #bb927f;
    border: none;
    border-radius: 0 12px 12px 0;
    cursor: pointer;
    transition: left 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const toggle_img = styled.img`
    width: 8px;
    height: 17px;
`;
