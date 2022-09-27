import { FC } from 'react';
import Head from 'next/head';
import Navbar from '../ui/Navbar';

interface Props {
    title?: String;
    children: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokedex - App'}</title>
                <meta name="description" content={`Information about pokemon ${title}`} />
                <meta name="keywords" content={`pokedex, pokemon, poke, ${title} `} />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="author" content="Marlon Morales" />
                <meta property='og:title' content={`Information about ${title}`} />
                <meta property='og:description' content={`This is the description about ${title}`} />
                <meta property='og:image' content={`${origin}/banner.png`} />
            </Head>
            <Navbar />
            <main>

                {children}
            </main>
        </>
    )
}
