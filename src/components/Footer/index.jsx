import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import RightSide from './RightSide'

const Wrapper = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 150px;
    background: #eee;
`

export class index extends Component {
    render() {
        return (
            <Wrapper>
                <Logo />
                <RightSide />
            </Wrapper>
        )
    }
}

export default index
