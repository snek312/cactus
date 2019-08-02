import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
export class ListItem extends Component {
    render() {
        return (
            <Wrapper
                href={this.props.itemRoute}
            >
                <span>{this.props.itemName}</span>
            </Wrapper>
        )
    }
}

export default ListItem
