import React from 'react'
import styled from 'styled-components'
import List from './List'
import Middle from './Middle'

const Wrapper = styled.div`
    display: flex;
    span {
        color: #9fd7db;
        font-size: 1.1em;
        font-weight: 400;
        margin-right: 30px;
    }
`

export default function index() {
    return (
        <Wrapper>
            <Middle />
            <List />
        </Wrapper>
    )
}
