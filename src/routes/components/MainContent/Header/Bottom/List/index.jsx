import React, { Component } from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const STATIC_DATA = [
    {
        header: 'json',
        textContent: 'json data structure',
        logo: 'ios-paper'
    }, {
        header: 'expressJS',
        textContent: 'based on popular nodeJS framework',
        logo: 'logo-nodejs'
    }, {
        header: 'fast',
        textContent: 'firebase based solution',
        logo: 'ios-speedometer'
    }, {
        header: 'reliable',
        textContent: 'easy and bug free',
        logo: 'ios-done-all'
    }

]

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    font-size: .8em;
    font-weight: 200;
`

export default class index extends Component {
    render() {
        return (
            <Wrapper>
                {STATIC_DATA.map((item, index) => (
                    <ListItem
                        key={`images-list-${index}`}
                        imgSource={item.imgSource}
                        header={item.header}
                        textContent={item.textContent}
                        logo={item.logo}
                    />
                ))}
            </Wrapper>
        )
    }
}
