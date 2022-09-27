import { Card, Grid, Image } from "@nextui-org/react";
import { useEffect, useState } from "react"
import { Layout } from "../../components/layout"
import { PokemonFavorite } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui"
import { localFavorites } from "../../utils";


const Favorites = () => {
    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritesPokemons(localFavorites.getFavorites())
    }, [])


    return (
        <Layout>
            {
                favoritesPokemons.length === 0
                    ? <NoFavorites />
                    : <PokemonFavorite ids={favoritesPokemons} />

            }

        </Layout>
    )
}

export default Favorites