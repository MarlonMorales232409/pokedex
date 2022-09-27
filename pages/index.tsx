import { Card, Grid, Row, Text } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layout'
import PokemonCard from '../components/pokemon/PokemonCard'
import { PokemonList, SmallPokemon } from '../interfaces'



interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <div >
      <Layout title={'Pokemon List'}>

        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>

      </Layout>
    </div>
  )
}


export default HomePage

// ? Serv side 'Static site generation SSG'

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon: SmallPokemon, i) => (
    {
      ...pokemon,
      id: `${i + 1}`,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }
  ))



  return {
    props: {
      pokemons: pokemons
    }
  }
}