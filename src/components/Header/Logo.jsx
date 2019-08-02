import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 170px;
    height: 50px;
    font-family: 'Titillium Web', sans-serif;
    padding: 5px;
    margin-top: 40px;
    margin-left: 50px;
    color: #1a828a;
    font-size: 2em;
    ::after {
        content: ' alpha';
        font-size: 0.5em;
        margin-left: 3px;
    }

    span {
        font-weight: 600;
        color: #eee;
    }
`

export class Logo extends Component {
    render() {
        return (
            <Wrapper as='a' href='/'>
                <i className='fas fa-spa'></i>
                <span>cactusAPI</span>
            </Wrapper>
        )
    }
}

export default Logo
