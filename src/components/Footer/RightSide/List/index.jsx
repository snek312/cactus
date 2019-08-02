import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem';

const STATIC_DATA = [
    {
        name: 'terms',
        route: '/terms'
    }, {
        name: 'contact',
        route: '/contact'
    },
    {
        name: 'something',
        route: '/route'
    }
]

const Wrapper = styled.div`
    display: flex;
    list-style: none;
`

export default function index() {
    return (
        <Wrapper>
            {STATIC_DATA.map((item, index) => (
                <ListItem
                    key={`footer-list-${index}`}
                    itemName={item.name}
                    itemRoute={item.route}
                />
            ))}
        </Wrapper>
    )
}
