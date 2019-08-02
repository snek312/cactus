import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 70px;
    padding: 5px;
    text-align: center;
    font-size: 1.5em;
    text-transform: capitalize;

    img {
        width: 55px;
        margin: 15px 0;
        box-shadow: 1px 1px 1px 1px #0B0E1A;
    }

    span {
        font-size: 1em;
    }

    ion-icon {
        margin: 30px 0;
        font-size: 4em;
        color: #9fd7db;
    }
`

export default class ListItem extends Component {
    render() {
        return (
            <Wrapper>
                <ion-icon
                    name={`${this.props.logo}`}
                    role="img"
                    class="hydrated"
                />
                <h3>{this.props.header}</h3>
                {/* <img src={this.props.imgSource} alt="" /> */}
                <span>{this.props.textContent}</span>
            </Wrapper>
        )
    }
}
