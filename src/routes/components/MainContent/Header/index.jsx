import React from 'react'
import styled, { keyframes } from 'styled-components'
import Bottom from './Bottom'
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const Wrapper = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    padding-top: 150px;
    padding-bottom: 75px;
    color: #eee;


    h1 {
        font-size: 2.5em;
        font-weight: 400;
        animation: 2s ${fadeInDownAnimation};

    }

    h2 {
        font-size: 1.3em;
        margin-top: 20px;
        color: #9fd7db;
        text-align: center;
        font-weight: 300;
        animation: 2.2s ${fadeInDownAnimation};

    }
`

export default function index() {
    return (
        <Wrapper>
            <h1>Simple API for simple Webpages</h1>
            <h2>Fetching data in easy way</h2>
            <Bottom />
        </Wrapper>
    )
}
