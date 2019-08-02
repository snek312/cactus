import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const STATIC_DATA = [
    {
        name: 'about',
        route: '/about'
    }
]

const Wrapper = styled.ul`
    display: flex;
    width: 150px;
    padding: 5px;
    margin-top: 40px;
    margin-right: 120px;
    font-weight: 300;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-size: 1.1em;
`

const DocsLink = styled.a`
    border: #1a828a solid 2px;
    border-radius: 11px;
    padding: 7px 11px;
    color: #1a828a;
    font-weight: 400;
    transition: .2s;

    :hover {
        color: #eee;
        border: #1a828a solid 2px;
        background: #1a828a;
    }
`

export default function List() {
    return (
        <Wrapper>
            {STATIC_DATA.map((item, index) => (
                <li key={`navli-${index}`}>
                    <ListItem
                        itemName={item.name}
                        itemRoute={item.route}
                    />
                </li>
            ))}
            <DocsLink href='/docs/about'>docs</DocsLink>
        </Wrapper>
    )
}
