import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #0B0E1A;
    margin-left: 13px;
    font-size: 1.1em;
    font-weight: 400;
    
    ::after {
        content: "";
        border-bottom: #eeeeee00 2px solid;
        width: 0%;
        transition: 0.2s;
    }
    :hover::after {
        content: "";
        width: 100%;
        border-bottom: #1a828a 2px solid;
    }
`

export default class ListItem extends Component {
    render() {
        return (
            <Wrapper href={this.props.itemRoute}>
                {this.props.itemName}
            </Wrapper>
        )
    }
}
