import NextLink from 'next/link'
import { useTheme, Text, Spacer, Link } from '@nextui-org/react'
import Image from 'next/image'



const Navbar = () => {

    const { theme } = useTheme()
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 10px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <NextLink href={'/'} passHref>
                <Link>
                    <Image src="/pokemon-23.svg" alt='logo' width={150} height={100} />
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />
            <NextLink href={'/favorites'} passHref>
                <Link>
                    <Text h4 color='white'>Favorites</Text>
                </Link>
            </NextLink>
        </div>
    )
}

export default Navbar