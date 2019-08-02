import React from 'react'
import styled, { keyframes } from 'styled-components'
import pic from './img/pic.png'
import { fadeInUp } from 'react-animations';

const fadeInLeftAnimation = keyframes`${fadeInUp}`;



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 75px;
    border-bottom: 1px solid #1a828a;

    img {
        margin: 170px 0;
        width: 1000px;
        border-radius: 10px;
        box-shadow: 0px 0px 28px 0px #000000bf;
        transition: .3;
        animation-delay: 1.5s;
        animation: 1.4s ${fadeInLeftAnimation};
}
`

export default function Image() {
    return (
        <Wrapper>
            <img src={pic} alt="homepage" />
            <h3>Easy way get all the data you need for your website</h3>
        </Wrapper>
    )
}
