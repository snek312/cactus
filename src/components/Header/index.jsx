import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import List from './List'

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    color: #eee;
`

export class index extends Component {
    render() {
        return (
            <Wrapper>
                <Logo />
                <List />
            </Wrapper>
        )
    }
}

export default index
