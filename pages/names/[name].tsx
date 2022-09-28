import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react"
import confetti from "canvas-confetti"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { redirect } from "next/dist/server/api-utils"
import { useState } from "react"
import { flushSync } from "react-dom"
import { pokeApi } from "../../api"
import { Layout } from "../../components/layout"
import { Pokemon, PokemonList, SmallPokemon } from "../../interfaces"
import { getPokemonInfo, localFavorites } from "../../utils"

interface Props {
    pokemon: Pokemon
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

    const onToggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id)
        setIsInFavorites(!isInFavorites)

        if (isInFavorites) return

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })
    }

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />

                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button color='gradient' ghost={!isInFavorites} onPress={onToggleFavorite}>
                                {isInFavorites ? 'On Favorites' : 'Save in Favorites'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container dir='row' display='flex' gap={0}>
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
                            </Container>
                        </Card.Body>

                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

// Server side 

export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')

    const pokemons: string[] = data.results.map((pokemon: SmallPokemon) => pokemon.name)

    return {
        paths: pokemons.map(name => ({
            params: { name }
        })),
        fallback: 'blocking'
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {


    const { name } = params as { name: string }
    const pokemon = await getPokemonInfo(name)

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400
    }
}





export default PokemonPageByName