import styled from "styled-components";

export const Container = styled.div`
    h1 {
        margin: 20px 0;
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        font-weight: 600;
        line-height: 1.15;
    }

    button {
        margin: 20px 5px;
        border: none;
        outline: none;
        padding: 10px 30px;
        border-radius: 2px;
        cursor: pointer;
        background-color: green;
        color: #fff;

        :first-child {
            background-color: red;
        }
    }
`;