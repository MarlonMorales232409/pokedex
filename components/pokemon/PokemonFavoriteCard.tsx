import { FC } from "react"
import { Card, Image } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props {
    id: number
}

export const PokemonFavoriteCard: FC<Props> = ({ id }) => {

    const router = useRouter();

    const goToPokemonDetails = () => {
        router.push(`pokemon/${id}`)
    }

    return (
        <Card isPressable isHoverable onPress={goToPokemonDetails}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt="pokemon-image"
                width={"100%"}
            />
        </Card>
    )
}
