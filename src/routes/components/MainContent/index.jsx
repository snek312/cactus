import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export class index extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
            </Wrapper>
        )
    }
}

export default index