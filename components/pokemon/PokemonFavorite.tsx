import React, { FC } from 'react'
import { Grid } from '@nextui-org/react'
import { PokemonFavoriteCard } from './PokemonFavoriteCard'

interface Props {
    ids: number[]
}

export const PokemonFavorite: FC<Props> = ({ ids }) => {

    return (
        <Grid.Container gap={2} direction='row' justify="flex-start" >
            {
                ids.map(id => (
                    <Grid xs={6} sm={3} md={2} xl={1} key={id} >
                        <PokemonFavoriteCard id={id} />
                    </Grid>
                ))

            }
        </Grid.Container>
    )
}
