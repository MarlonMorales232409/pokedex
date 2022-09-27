import { Container, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
    return (
        <Container css={{
            height: 'calc(100vh - 100px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text h1>No Favorites Yet</Text>
        </Container>
    )
}
