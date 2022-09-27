import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from '../../interfaces'

interface Props {
    pokemon: SmallPokemon
}
const PokemonCard: FC<Props> = ({ pokemon: { id, img, name } }) => {

    const router = useRouter();

    const showPokemonData = () => {
        router.push(`/pokemon/${id}`)
    }

    const showPokemonDataByName = () => {
        router.push(`/names/${name}`)
    }

    return (
        <Grid key={id} xs={6} sm={3} xl={1}>
            <Card isHoverable isPressable onClick={showPokemonDataByName}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={img}
                        width='100%'
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid >
    )
}

export default PokemonCard